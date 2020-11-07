import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Articles from './Articles'
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';


const apiKey = '78b9d599c4f94f8fa3afb1a5458928d6';

class ArticlesList extends Component {

    state = {
        articles: [],
        searchString: '',
        searchCategory: '',
        alignment: ''
    }
    constructor() {
        super()
        this.getArticles()
    }
    getArticles = (text, category) => {
        var searchString = this.state.searchString;
        var searchCategory = this.state.searchCategory;

        if (text == null) {
            searchCategory = category;
        }
        if (category == null) {
            searchString = text;
        }

        var param = new URLSearchParams({
            q: searchString,
            category: searchCategory,
            apiKey
        });

        if (searchString == '' && searchCategory == '') {
            param = new URLSearchParams({
                apiKey
            });
        }
        else if (searchCategory == '') {
            param = new URLSearchParams({
                q: searchString,
                apiKey
            });
        }
        else if (searchString == '') {
            param = new URLSearchParams({
                category: searchCategory,
                apiKey
            });
        }
        console.log("Param: " + param);

        fetch('https://newsapi.org/v2/top-headlines?' + param)
            .then(response => response.json())
            .then((jsonResponse) => {
                console.log(jsonResponse.articles);
                if (jsonResponse.articles) {
                    this.setState({ articles: jsonResponse.articles });
                }
            }).catch((error) => {
                console.log("Error occurred while fetching Entries")
                console.error(error)
            })
    }
    onSearchInputChange = (event) => {
        console.log(event.currentTarget.value)

        if (event.currentTarget.value) {
            this.setState({ searchString: event.currentTarget.value })
        } else {
            this.setState({ searchString: '' })
        }
        this.getArticles(event.currentTarget.value, null)
    }

    onCategoryChange = (event) => {
        if (event.currentTarget.value) {
            console.log(event.currentTarget.value)

            this.setState({ searchCategory: event.currentTarget.value });

        } else {
            this.setState({ searchCategory: '' })
        }
        this.getArticles(null, event.currentTarget.value)
    }

    handleAlignment = (event, newAlignment) => {
        this.setState(
            {
                alignment: newAlignment
            });
    };

    render() {
        return (
            <div>
                { this.state.articles ? (
                    <div>
                        <ToggleButtonGroup value={this.state.alignment} exclusive onChange={this.handleAlignment} variant="text" color="primary" aria-label="text primary button group " style={{ justifyContent: 'center' }}>
                            <ToggleButton onClick={this.onCategoryChange} value='business'>Business</ToggleButton>
                            <ToggleButton onClick={this.onCategoryChange} value='entertainment'>Entertainment</ToggleButton>
                            <ToggleButton onClick={this.onCategoryChange} value='general'>General</ToggleButton>
                            <ToggleButton onClick={this.onCategoryChange} value='health'>Health</ToggleButton>
                            <ToggleButton onClick={this.onCategoryChange} value='science'>Science</ToggleButton>
                            <ToggleButton onClick={this.onCategoryChange} value='sports'>Sports</ToggleButton>
                            <ToggleButton onClick={this.onCategoryChange} value='technology'>Technology</ToggleButton>
                        </ToggleButtonGroup>

                        <TextField style={{ padding: 24 }, { justifyContent: 'right' }}
                            id="searchInput"
                            placeholder="Search for News Articles"
                            margin="normal"
                            onChange={this.onSearchInputChange}
                        />
                        <Grid container spacing={4} style={{ padding: 24 }}>
                            {this.state.articles.map(currentArticle => (
                                <Grid item xs={12} sm={6} lg={4} xl={3}>
                                    <Articles article={currentArticle} />
                                </Grid>
                            ))}
                        </Grid>
                    </div>
                ) : "No articles found"}
            </div>
        )
    }
}
export default ArticlesList;