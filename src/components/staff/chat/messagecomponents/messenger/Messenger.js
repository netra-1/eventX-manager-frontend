import React from 'react'
import { useEffect, useRef } from "react";
import { useState } from "react";
import ChatUserItem from "../conversation/conversation";
import Message from "../Message/Message";
import "./messenger.scss";
import axios from "axios";
import no_conversation from '../../../../../assets/img/no_conversation.png';
import {useSocket} from "../../../../../context/socket";

const Messenger = () => {

  return (
    <>
      <div className="messenger">
        <div className="chatMenu">
          <p className="conversation-heading"> Conversations</p>

          <div className="chatmenuWrapper">
            {userList.map((userItem) => {
              const hasNewMsg = newMessageReceivedUsers.includes(userItem._id)
              return (
                  <div
                      key={userItem._id}
                      onClick={handleUserItemClick(userItem)}
                      data-test="sender-btn"
                      className={`${
                          currentChat === userItem ? "conversation-users__active" : ''
                      } conversation-users ${hasNewMsg ? 'conversation-users__new-message' : ''}`}
                  >
                    {hasNewMsg && (
                        <span className={'new-message-count'}>{newMessageReceivedUsers.filter(user => user === userItem._id).length}</span>
                    )}
                    <ChatUserItem userItem={userItem} />
                  </div>
              )
            })}
          </div>
        </div>
        <div className="chatBox">
          <div className="chatBoxWrapper">
            {currentChat ? (
              <>
                <div className='pb-2 flex'>
                  <img
                    className="conversationImg"
                    src={currentChat.image.url}
                    alt="PP"
                  />
                  {currentChat.profile.fullName}
                </div>
                <div className="chatBoxTop" style={{minHeight: '500px'}}>
                  {messages.map((msg) => (
                    <div ref={scrollRef}>
                      <Message
                        message={msg}
                        currentChat={currentChat}
                      />
                    </div>
                  ))}
                </div>
                <div class="chat-message clearfix">
                  <form className="chat__form" onSubmit={handleSubmit}>
                  <div class="grid gap-6 mb-6 md:grid-cols-2">
                      <input type="text" name='message-to-send'
                      onChange={(e) => {
                        setNewMessage(e.target.value);
                      }}
                      value={newMessage} id="message-to-send" class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:white dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your message" required />
                    {" "}
                    <div>
                      <button
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                      type="submit"
                      data-test="send-btn"
                    >
                      Send message
                    </button></div>
                    </div>
                  </form>
                </div>
              </>
            ) : (
              <span className="no-conversation">
                <img
                  src={no_conversation}
                  alt="no_conversation"
                  className="no-conversation__img"
                />
              </span>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default Messenger;