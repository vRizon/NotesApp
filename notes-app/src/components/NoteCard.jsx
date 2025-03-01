import { useRef, useEffect, use } from "react";
import Trash from "../icons/Trash";

const NoteCard = ({ note }) => {
  const body = JSON.parse(note.body);
  const position = JSON.parse(note.position);
  const colors = JSON.parse(note.colors);

  const textAreaRref = useRef(null);
  const autoGrow = (textarea) => {
    const { current } = textAreaRref;
    current.style.height = "auto";
  };

  return (
    <div
      className="card"
      style={{
        backgroundColor: colors.colorBody,
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    >
      {/* Header */}
      <div
        className="card-header"
        style={{
          backgroundColor: colors.colorHeader,
        }}
      >
        <Trash />
      </div>

      {/* Body */}
      <div className="card-body">
        <textarea
          ref={textAreaRref}
          style={{ color: colors.colorText }}
          defaultValue={body}
        ></textarea>
      </div>
    </div>
  );
};

export default NoteCard;
