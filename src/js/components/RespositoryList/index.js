import React from 'react';
import './index.css';
import { data } from '../../actions/testAction';
import connect from 'redux-connect-decorator';
@connect((store) => {
    return {
        repo: store.test.repositoryData
    }
})
export default class TestComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            repoData: [],
            id: "",
            description: "",
            name: "",
            avatar_url: "",
            createdAt: "",
            open_issues: 0,
            watchers: 0
        }
    }

    componentDidMount() {
        this.props.dispatch(data())
        debugger
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.repo.payload !== nextProps.repo.payload) {
            this.setState({
                repoData: nextProps.repo.payload
            }, () => {
                debugger
            })
        }
    }

    showRepoData(value) {
        this.setState({
            id: value.id && value.id.length !== 0 ? value.id : "",
            name: value.name && value.name.length !== 0 ? value.name : "",
            description: value.description && value.description.length !== 0 ? value.description : "",
            avatar_url: value.owner && value.owner.avatar_url && value.owner.avatar_url.length !== 0 ? value.owner.avatar_url : "",
            createdAt: value.created_at ? value.created_at : "",
            open_issues: value.open_issues ? value.open_issues : 0,
            watchers: value.watchers ? value.watchers : 0
        }, () => {
            this.props.history.push({
                pathname: `/repository_info`,
                state: {
                    id: this.state.id,
                    name: this.state.name,
                    description: this.state.description,
                    avatar_url: this.state.avatar_url,
                    createdAt: this.state.createdAt,
                    open_issues: this.state.open_issues,
                    watchers: this.state.watchers
                }
            })
        })

    }

    render() {
        return (
            <React.Fragment>
                <div className="repository-wrapper">
                    {
                        this.state.repoData.map((value, key) => {
                            return (
                                <div className="respository-container" key={key} onClick={this.showRepoData.bind(this, value)} style={{ cursor: "pointer" }}>
                                    <div style={{ display: "table" }}>
                                        <div style={{ display: "table-cell" }}>
                                            {value.owner && value.owner.avatar_url && value.owner.avatar_url.length !== 0 ?
                                                <img src={value.owner.avatar_url} alt="" style={{ height: "30px", width: "30px", borderRadius: "100px" }} /> :
                                                <div style={{ height: "30px", width: "30px", background: "grey", borderRadius: "100px" }}></div>}
                                        </div>
                                        <div style={{ display: "table-cell", verticalAlign: "middle" }}>
                                            {value.name && value.name.length !== 0 ? value.name : ""}
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </React.Fragment>
        )
    }
}