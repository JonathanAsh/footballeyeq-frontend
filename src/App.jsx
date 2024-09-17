import {
    Container,
    Divider,
    Grid,
    Header,
    Image,
    List,
    Menu,
    Segment,
    CardGroup,
} from 'semantic-ui-react';
import './App.css';
import items from './exercises';
import ExerciseCard from './components/ExerciseCard';

function App() {

    return (
        <>
            <div>
                <Image src='src/assets/the-united-states-womens-soccer-team-practices-for-335949-1024.jpg' className='background-image' />
            </div>
            <div className='body'>
                <Menu fixed='top' inverted>
                    <Container>
                        <Menu.Item as='a' header>
                            <Image size='small' src='src/assets/footballeyeq-logo.png' />
                        </Menu.Item>
                        <Menu.Item as='a'>Home</Menu.Item>
                        <Menu.Item as='a'>Logout</Menu.Item>
                    </Container>
                </Menu>
                <Container text style={{ backgroundColor: 'white', paddingTop: '8rem', paddingBottom: '4rem' }}>
                    <Header as='h1'>Exercise Selection</Header>
                    <p>Select as many or as little exercises as you like.</p>
                    <p>Each one will be saved to your account to appear in-app.</p>
                    <br></br>

                    <CardGroup>
                        {
                            items.map((item, index) => {
                                return (
                                    <ExerciseCard key={index} index={index} item={item} />
                                )
                            })
                        }
                    </CardGroup>
                </Container>

                <Segment inverted vertical style={{ margin: '5em 0em 0em', padding: '5em 0em' }}>
                    <Container textAlign='center'>
                        <Grid divided inverted stackable>
                            <Grid.Column width={3}>
                                <Header inverted as='h4' content='Group 1' />
                                <List link inverted>
                                    <List.Item as='a'>Link One</List.Item>
                                    <List.Item as='a'>Link Two</List.Item>
                                    <List.Item as='a'>Link Three</List.Item>
                                    <List.Item as='a'>Link Four</List.Item>
                                </List>
                            </Grid.Column>
                            <Grid.Column width={3}>
                                <Header inverted as='h4' content='Group 2' />
                                <List link inverted>
                                    <List.Item as='a'>Link One</List.Item>
                                    <List.Item as='a'>Link Two</List.Item>
                                    <List.Item as='a'>Link Three</List.Item>
                                    <List.Item as='a'>Link Four</List.Item>
                                </List>
                            </Grid.Column>
                            <Grid.Column width={3}>
                                <Header inverted as='h4' content='Group 3' />
                                <List link inverted>
                                    <List.Item as='a'>Link One</List.Item>
                                    <List.Item as='a'>Link Two</List.Item>
                                    <List.Item as='a'>Link Three</List.Item>
                                    <List.Item as='a'>Link Four</List.Item>
                                </List>
                            </Grid.Column>
                            <Grid.Column width={7}>
                                <Header inverted as='h4' content='Footer Header' />
                                <p>
                                    Extra space for a call to action inside the footer that could help re-engage users.
                                </p>
                            </Grid.Column>
                        </Grid>

                        <Divider inverted section />
                        <Image centered size='mini' src='/logo.png' />
                        <List horizontal inverted divided link size='small'>
                            <List.Item as='a' href='#'>
                                Site Map
                            </List.Item>
                            <List.Item as='a' href='#'>
                                Contact Us
                            </List.Item>
                            <List.Item as='a' href='#'>
                                Terms and Conditions
                            </List.Item>
                            <List.Item as='a' href='#'>
                                Privacy Policy
                            </List.Item>
                        </List>
                    </Container>
                </Segment>
            </div>
        </>
    )

}

export default App
