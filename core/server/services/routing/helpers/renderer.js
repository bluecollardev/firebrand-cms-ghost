const _ = require('lodash');
// TODO: Move this out!
const FIREBRAND_CMS_TEMPLATES = {
    DEFAULT: require('../config/template/page.config.json')
};

const debug = require('ghost-ignition').debug('services:routing:helpers:renderer'),
    setContext = require('./context'),
    templates = require('./templates');

module.exports = function renderer(req, res, data) {
    // Context
    setContext(req, res, data);

    // Template
    templates.setTemplate(req, res, data);

    // Render Call
    debug('Rendering template: ' + res._template + ' for: ' + req.originalUrl);
    debug('res.locals', res.locals);

    if (res.routerOptions && res.routerOptions.contentType) {
        if (res.routerOptions.templates.indexOf(res._template) !== -1) {
            res.type(res.routerOptions.contentType);
        }
    }
    
    _.merge(data, FIREBRAND_CMS_TEMPLATES.DEFAULT);
    res.render(res._template, data);
};
