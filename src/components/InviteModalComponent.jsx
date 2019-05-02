import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

class InviteModalComponent extends React.Component {
  render() {
    const { invitation, isOpen } = this.props;
    if (!isOpen || !invitation) return null;
    return (
      <div>
        <Modal
          isOpen={isOpen}
          toggle={this.props.toggle}
          className={this.props.className}
        >
          <ModalBody>
            <div className="inviteModal">
              <div className="to">{invitation.to},</div>
              <div className="message">{invitation.message}</div>
              <div className="by">
                Yours; <div>{invitation.from}</div>
              </div>
            </div>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default InviteModalComponent;
