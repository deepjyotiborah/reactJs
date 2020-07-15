import React, { Component } from "react";
import Aux from '../Aux';
import Modal from '../../components/UI/Modal/Modal';


const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {
        state = {
            error: null
        };

        componentWillMount() {
            console.log("componentWillMount from errorhandler.")
            this.reqIngterceptor = axios.interceptors.request.use(req => {
                this.setState({error: null});
                return req;
            });

            this.resIngterceptor = axios.interceptors.response.use(res => res, error => {
                                        this.setState({error: error});
                                    });
        }

        componentWillUnmount() {
            axios.interceptors.request.eject(this.reqIngterceptor)
            axios.interceptors.response.eject(this.resIngterceptor)
        }

        errorConfirmedHandler = () => {
            this.setState({error: null});
        }

        render(){
            return (
                <Aux>
                    <Modal
                        show={this.state.error}
                        modalClosed={this.errorConfirmedHandler}>
                            {this.state.error ? this.state.error.message : null}
                    </Modal>
                    <WrappedComponent {...this.props}/>
                </Aux>
            )
        }
    }
}

export default withErrorHandler;