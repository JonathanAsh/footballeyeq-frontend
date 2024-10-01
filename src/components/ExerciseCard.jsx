import {
    Card,
    CardContent,
    CardHeader,
    CardMeta,
    CardDescription,
    Icon,
} from 'semantic-ui-react';
import { useState } from 'react';
import { handleExerciseClicked } from '../actions';

export default function ExerciseCard({ index, item }) {
    const [selected, setSelected] = useState(false);

    return (
        <Card fluid raised onClick={async () => { setSelected(handleExerciseClicked(item._id)) }} key={index}>
            <CardContent>
                <Icon
                    name={selected ? 'checkmark' : null}
                    color='grey'
                    bordered
                    className='selection-icon'
                />
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
                {
                    item.categories.map((category, cat_index) => {
                        if (cat_index > 0)
                            return (<span key={cat_index}>, {category}</span>)
                        return <span key={cat_index}>{category}</span>
                    })
                }
            </CardContent>
        </Card>
    )
};
