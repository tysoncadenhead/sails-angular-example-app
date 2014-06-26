/*global module */
/*jshint strict: false */

module.exports = {
    
  index: function (req, res) {
    res.view(null, {
        title: "List"
    });
  }
  
};
