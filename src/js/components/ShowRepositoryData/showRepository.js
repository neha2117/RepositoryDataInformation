import React from 'react';
import './showRepository.css';

class ShowRepository extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
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
        var id =
            this.props.location &&
                this.props.location.hasOwnProperty("state") &&
                this.props.location.state.hasOwnProperty("id")
                ? this.props.location.state.id
                : "";
        var name =
            this.props.location &&
                this.props.location.hasOwnProperty("state") &&
                this.props.location.state.hasOwnProperty("name")
                ? this.props.location.state.name
                : "";
        var description =
            this.props.location &&
                this.props.location.hasOwnProperty("state") &&
                this.props.location.state.hasOwnProperty("description")
                ? this.props.location.state.description
                : "";
        var avatar_url =
            this.props.location &&
                this.props.location.hasOwnProperty("state") &&
                this.props.location.state.hasOwnProperty("avatar_url")
                ? this.props.location.state.avatar_url
                : "";
        var createdAt =
            this.props.location &&
                this.props.location.hasOwnProperty("state") &&
                this.props.location.state.hasOwnProperty("createdAt")
                ? this.props.location.state.createdAt
                : "";
        var open_issues =
            this.props.location &&
                this.props.location.hasOwnProperty("state") &&
                this.props.location.state.hasOwnProperty("open_issues")
                ? this.props.location.state.open_issues
                : 0;
        var watchers =
            this.props.location &&
                this.props.location.hasOwnProperty("state") &&
                this.props.location.state.hasOwnProperty("watchers")
                ? this.props.location.state.watchers
                : 0;

        this.setState({
            id: id,
            name: name,
            description: description,
            avatar_url: avatar_url,
            createdAt: createdAt,
            open_issues: open_issues,
            watchers: watchers

        })
    }

    getUpdatedDate(updatedAt) {
        var data = updatedAt;
        var year = data.slice(0, 4);
        var months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
        const month = new Date(data);
        var monthDisplay = months[month.getMonth()]
        var date = month.getDate();
        var final_date = date + '-' + monthDisplay + '-' + year;
        return final_date;
    }

    goBackToMain() {
        this.props.history.push({
            pathname: `/`
        })
    }

    render() {
        return (
            <React.Fragment>
                <div onClick={this.goBackToMain.bind(this)} style={{ cursor: "pointer" }}>
                    Back
                </div>
                <div className="showRepository-wrapper">
                    <div style={{ display: "table", width: "100%" }}>
                        <div style={{ display: "table-cell" }}>
                            <img src={this.state.avatar_url} alt="" style={{ width: "100px", height: "100px", borderRadius: "100%" }} />
                        </div>
                        <div style={{ display: "table-cell", verticalAlign: "middle" }}>
                            <div>
                                Name: {this.state.name}
                            </div>
                            <div>
                                Description: {this.state.description}
                            </div>
                            <div>
                                Created At: {this.state.createdAt ? this.getUpdatedDate(this.state.createdAt) : ""}
                            </div>
                            <div>
                                Open Issues: {this.state.open_issues}
                            </div>
                            <div>
                                Watchers: {this.state.watchers}
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default ShowRepository;