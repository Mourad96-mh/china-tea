"use client";
import { useEffect, useRef, useState } from "react";
import Icon from "@/components/Icon";
import { site } from "@/lib/site";

// Floating WeChat button above the WhatsApp one. WeChat has no web link that opens a chat,
// so the panel shows the number to search in the app (plus the QR code once supplied)
// and a button that copies the number.
export default function WeChatFloat({ t }) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const box = useRef(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    const onClick = (e) => box.current && !box.current.contains(e.target) && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [open]);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(site.wechat.search.replace(/\s/g, ""));
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard blocked: the number stays visible and selectable.
    }
  };

  return (
    <div className="wechat-float" ref={box}>
      {open && (
        <div className="wechat-panel" role="dialog" aria-label="WeChat">
          <p className="wechat-panel__title">
            <Icon name="wechat" size={20} /> WeChat
          </p>
          <p className="wechat-panel__text">{t.wechatText}</p>
          {site.wechat.qr && <img className="wechat-panel__qr" src={site.wechat.qr} alt={t.wechatQr} width="180" height="180" />}
          <p className="wechat-panel__id">{site.wechat.search}</p>
          <button type="button" className="btn btn--wechat" onClick={copy}>
            {copied ? t.wechatCopied : t.wechatCopy}
          </button>
        </div>
      )}
      <button type="button" className="wechat-float__btn" onClick={() => setOpen((o) => !o)} aria-expanded={open} aria-label={t.wechat}>
        <Icon name={open ? "close" : "wechat"} size={open ? 24 : 30} />
      </button>
    </div>
  );
}
