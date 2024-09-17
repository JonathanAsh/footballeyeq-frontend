import {
    Container,
    Divider,
    Dropdown,
    Grid,
    Header,
    Image,
    List,
    Menu,
    Segment,
    Card,
    CardGroup,
    CardContent,
    CardHeader,
    CardMeta,
    CardDescription,
    Icon,
  } from 'semantic-ui-react';
import './App.css';
import items from './exercises';

function App() {

    return (
        <>
          <div>
                <Menu fixed='top' inverted>
                <Container>
                    <Menu.Item as='a' header>
                        {/* Image doesn't show, fix this -- also once done, remove "Project Name" */}
                    <Image size='mini' src='./assets/footballeyeq-logo.png' style={{ marginRight: '1.5em' }} />
                    Project Name
                    </Menu.Item>
                    <Menu.Item as='a'>Home</Menu.Item>

                    <Dropdown item simple text='Dropdown'>
                    <Dropdown.Menu>
                        <Dropdown.Item>List Item</Dropdown.Item>
                        <Dropdown.Item>List Item</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Header>Header Item</Dropdown.Header>
                        <Dropdown.Item>
                        <i className='dropdown icon' />
                        <span className='text'>Submenu</span>
                        <Dropdown.Menu>
                            <Dropdown.Item>List Item</Dropdown.Item>
                            <Dropdown.Item>List Item</Dropdown.Item>
                        </Dropdown.Menu>
                        </Dropdown.Item>
                        <Dropdown.Item>List Item</Dropdown.Item>
                    </Dropdown.Menu>
                    </Dropdown>
                </Container>
                </Menu>

                <Container text style={{ marginTop: '7em' }}>
                <Header as='h1'>Exercise Selection</Header>
                <p>Select as many or as little exercises as you like.</p>
                <p>Each one will be saved to your account to appear in the app.</p>

                <CardGroup>
                    {items.map((item, index) => {
                        {console.log('creating item ' + index)}
                        return (
                            <Card fluid raised key={index} className={index === 1 ? 'selected' : 'unselected'}>
                                <CardContent>
                                    <CardHeader>{item.name}</CardHeader>
                                    <CardMeta>
                                        <span className='date'>Age Groups {item.ages}</span>
                                    </CardMeta>
                                    <CardDescription>
                                        {item.description}
                                    </CardDescription>
                                </CardContent>
                                <CardContent extra>
                                    <Icon name='angle right' />
                                    {item.categories.map((cat, index2) => {
                                        if (index2 > 0)
                                            return (<a key={index2}>, {cat}</a>)
                                        return <a key={index2}>{cat}</a>
                                    })}
                                </CardContent>
                            </Card>
                        )
                    })}
                    
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
