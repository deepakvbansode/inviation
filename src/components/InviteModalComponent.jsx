import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class InviteModalComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    return (
      <div>
        <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalBody>
            <div className="inviteModal">
                <div>
                  Dear Gautam,
                </div>
                <div>
                  I am glad to invite you at the celebration of my marriage.
                </div>
                <div>
                  Yours;
                    Deepak Bansode
                </div>
            </div>
          </ModalBody>
          
        </Modal>
      </div>
    );
  }
}

export default InviteModalComponent;