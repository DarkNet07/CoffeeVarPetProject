import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { type RootState, useAppDispatch } from '../../store';
// import type User from '../auth/User';
import type { Message } from '../messages/Message';
import { createMessage, loadMessages } from '../messages/MessageSlice';
// { id }: { id: User['id'] }
function ProfileMessageComponent(): JSX.Element {
  const dispatch = useAppDispatch();
  // const CurrentBarista = useSelector((state: RootState) => state.barista.CurrentBarista);
  const User = useSelector((state: RootState) => state.auth.user);
  console.log(User, 'ЭТО User');

  const MessageList = useSelector((state: RootState) => state.message.MessageList);

  useEffect(() => {
    dispatch(loadMessages());
  }, [dispatch, User]);
  const [messageContent, setMessageContent] = useState('');
  const [formMessage, setFormMessage] = useState(false);
  const [recId, setRecId] = useState<number>(0);
  // let recId: number;
  console.log(recId);

  function handleShowForm(senderId: number): void {
    // recId = senderId;
    setRecId(senderId);
    console.log(senderId);

    setFormMessage((prev) => !prev);
  }

  const handleSendMessage = (): void => {
    console.log(12312312);
    console.log(recId);

    const message: Message = {
      message: messageContent,
      senderId: User!.id,
      receiverId: recId,
    };

    dispatch(createMessage(message));
    setMessageContent('');
  };

  // parsed from map --- && m.receiverId === +id
  return (
    <div>
      <h2>Входящие сообщения:</h2>
      <ul>
        {MessageList.length > 0 ? (
          MessageList.map((m) => {
            if (m.receiverId === User!.id) {
              console.log(User?.id, 'UUUUUUUUUUUSSSSEER IDDDDD');
              return (
                <div className="container">
                  <li key={m.id}>{m.message}</li>
                  {formMessage ? (
                    <form>
                      <textarea
                        className="text-black"
                        name="textarea"
                        rows={5}
                        cols={50}
                        value={messageContent}
                        onChange={(e) => setMessageContent(e.target.value)}
                        placeholder="Ваше сообщение"
                      />
                      <button type="button" onClick={handleSendMessage}>
                        Отправить сообщение
                      </button>
                    </form>
                  ) : (
                    ''
                  )}
                  <button
                    type="button"
                    onClick={() => {
                      console.log(m);

                      handleShowForm(m.senderId);
                    }}
                  >
                    {' '}
                    Ответить
                  </button>
                </div>
              );
            }
          })
        ) : (
          <li>У Вас пока нет сообщений</li>
        )}
      </ul>
    </div>
  );
}

export default ProfileMessageComponent;
