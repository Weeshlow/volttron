'use strict';

var React = require('react');

var modalActionCreators = require('../action-creators/modal-action-creators');
var platformActionCreators = require('../action-creators/platform-action-creators');

var RemoveAgentForm = React.createClass({
    getInitialState: function () {
        var state = {};

        for (var prop in this.props.agent) {
            state[prop] = this.props.agent[prop];
        }

        return state;
    }, 
    _onPropChange: function (e) {
        var state = {};

        this.setState(state);
    },
    _onCancelClick: modalActionCreators.closeModal,
    _onSubmit: function () {
        platformActionCreators.removeAgent(this.props.platform, this.props.agent);
    },
    render: function () {
        // var agentInfo = {
        //     method: 'platforms.uuid.' + this.props.platform.uuid + '.remove_agent',
        //     params: [this.props.agent.uuid],
        //     authorization: 'someAuthorizationToken',
        // };

        // var agentInfoString = '{method: ' + agentInfo.method + ',  params: [' + agentInfo.params + '] , authorization: ' + 
        //     agentInfo.authorization + '}';

        var removeMsg = 'Remove agent ' + this.props.agent.uuid + ' (' + this.props.agent.name + 
            ', ' + this.props.agent.tag + ')?';
        

        return (
            <form className="remove-agent-form" onSubmit={this._onSubmit}>
                <div >{removeMsg}</div>
                <div className="form__actions">
                    <button
                        className="button button--secondary"
                        type="button"
                        onClick={this._onCancelClick}
                    >
                        Cancel
                    </button>
                    <button
                        className="button"
                        type="submit"
                        disabled={!this.props.agent.uuid}
                    >
                        Remove
                    </button>
                </div>
            </form>
        );
    },
});

module.exports = RemoveAgentForm;
