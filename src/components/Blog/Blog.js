import React, { useState } from 'react';
import { Button, Collapse } from 'react-bootstrap';
import Header from '../Header/Header';
import './Blog.css';

const Blog = () => {
    const [open, setOpen] = useState(false);
    return (
        <div>
            <Header></Header>
            <div className='faq-text'>
                <Button
                    onClick={() => setOpen(!open)}
                    aria-controls="example-collapse-text"
                    aria-expanded={open}
                >
                    What is the purpose of React Router ?
                </Button>
                <Collapse in={open}>
                    <div id="example-collapse-text">
                        ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route

                    </div>
                </Collapse>
            </div>

            <div className='faq-text'>
                <Button
                    onClick={() => setOpen(!open)}
                    aria-controls="example-collapse-text"
                    aria-expanded={open}
                >
                    How does ContextAPI works ?
                </Button>
                <Collapse in={open}>
                    <div id="example-collapse-text">
                        ContextAPI provides a way to pass data through the component tree without having to pass props down manually at every level.It is the solution to pass data through the component tree from parent to child components, without prop drilling.
                    </div>
                </Collapse>
            </div>

            <div className='faq-text'>
                <Button
                    onClick={() => setOpen(!open)}
                    aria-controls="example-collapse-text"
                    aria-expanded={open}
                >
                    useRef details information is given below :
                </Button>
                <Collapse in={open}>
                    <div id="example-collapse-text">
                        The useRef is a hook that allows to directly create a reference to the DOM element in the functional component. The useRef returns a mutable ref object. This object has a property called .current.The value is persisted in the refContainer.current property. These values are accessed from the current property of the returned object. The .current property could be initialised to the passed argument initialValue e.g. useRef(initialValue). The object can persist a value for a full lifetime of the component.
                    </div>
                </Collapse>
            </div>



        </div>
    );
};

export default Blog;