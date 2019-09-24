import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import NewsContent from './NewsContent'

class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [
                {
                    aid: '11',
                    title: '我是新闻1111'
                },
                {
                    aid: '222',
                    title: '我是新闻222'
                },
                {
                    aid: '3',
                    title: '我是新闻333'
                },
                {
                    aid: '4',
                    title: '我是新闻4444'
                }
            ]
        };
        console.log(this.props.match);
        console.log(this.props.routes);
    }
    render() {
        return (
            <div>
                我是新闻组件
                <ul>
                    <li><Link to={`${this.props.match.url}/`}>新闻列表</Link></li>
                
                    {
                        this.state.list.map((value, key) => {
                            return (
                                <li key={key}>
                                    <Link to={`/news/newscontent/${value.aid}`}>{value.title}</Link>
                                    {/* <Link to={`${this.props.match.url}/newscontent/${value.aid}`}>{value.title}</Link> */}
                                </li>
                            )
                        })
                    }
                </ul>
                {/* <Route path="/news/newscontent/:aid" component={NewsContent} /> */}
                {/* <Route exact path={`${this.props.match.url}/newscontent/:aid`} component={NewsContent} /> */}
                {
                    this.props.routes.map((value, key) => {
                        return <Route key={key} exact path={value.path} component={value.component} />
                    })
                }


            </div>
        );
    }
}

export default News;