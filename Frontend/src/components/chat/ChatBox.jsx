import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { ChatContext } from "../../context/ChatContext";
import { useFetchRecipient } from "../../hooks/useFetchRecipient";
import { Stack } from "react-bootstrap";

const ChatBox = () => {
    const { user } = useContext(AuthContext);
    const { currentChat, messages, isMessagesLoading } = useContext(ChatContext);
    const { recipientUser } = useFetchRecipient(currentChat, user);

    if (!recipientUser) {
        return (<p style={{ textAlign: "center", width: "100%" }}>No conversation selected</p>);
    }

    if (isMessagesLoading) {
        return <p style={{ textAlign: "center", width: "100%" }}>Loading messages..</p>;
    }

    return(
        <Stack gap={4} className="chat-box">
            <div className="chat-header">
                <strong>{recipientUser?.name}</strong>
            </div>
        </Stack>
    );
};

export default ChatBox;