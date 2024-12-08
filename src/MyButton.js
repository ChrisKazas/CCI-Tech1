import Button from '@mui/material/Button';
import { useState } from 'react';

const MyButton = () => {

    const [text, setText] = useState('Welcome')

    const handleClick = async () => {
        setText("Chris")
    }

    return (
        <>
            <Button
                variant="contained"
                onClick={handleClick}
            >
                click me
            </Button>
            <h1>{text}</h1>
        </>
    );
}

export default MyButton;