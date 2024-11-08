! function() {
    var t, n = document.createElement("pre"),
        h = document.createElement("canvas"),
        r = h.getContext("2d"),
        i = {
            font: "Sans-serif",
            align: "left",
            color: "#000000",
            size: 64,
            background: "rgba(0, 0, 0, 0)",
            stroke: 0,
            strokeColor: "#FFFFFF",
            lineHeight: "1.2em",
            bold: !1,
            italic: !1
        };

    function s(t) {
        t = String(t), n.innerText = t, n.setAttribute("style", this._style), document.body.append(n);
        var e = t.split("\n"),
            i = this.style.stroke,
            s = n.offsetHeight / e.length,
            l = .25 * s;
        h.width = n.offsetWidth + 2 * i, h.height = n.offsetHeight, r.clearRect(0, 0, h.width, h.height), r.fillStyle = this.style.background, r.beginPath(), r.fillRect(0, 0, h.width, h.height), r.fill();
        var o = "";
        switch (this.style.italic && (o += "italic "), this.style.bold && (o += "bold "), o += this.style.size + "pt " + this.style.font, r.font = o, r.textAlign = this.style.align, r.lineWidth = this.style.stroke, r.strokeStyle = this.style.strokeColor, r.fillStyle = this.style.color, r.textAlign) {
            case "center":
                i = h.width / 2;
                break;
            case "right":
                i = h.width - i
        }
        e.forEach(function(t, e) {
            this.style.stroke && r.strokeText(t, i, s * (e + 1) - l), r.fillText(t, i, s * (e + 1) - l)
        }.bind(this)), document.body.removeChild(n)
    }
    window.TextImage = function(t) {
        return this instanceof TextImage ? (this.setStyle(t), this) : new TextImage(t)
    }, (t = window.TextImage.prototype).setStyle = function(t) {
        for (var e in this.style = t || {}, i) this.style[e] || (this.style[e] = i[e]);
        return this._style = "font: ", this.style.italic && (this._style += "italic "), this.style.bold && (this._style += "bold "), this._style += this.style.size + "pt " + this.style.font + ";", this._style += "line-height:" + this.style.lineHeight + ";", this._style += "text-align: " + this.style.align + ";", this._style += "color: " + this.style.color + ";", this._style += "background-color: " + this.style.background + ";", this._style += ";padding: 0; display: block; position: fixed; top: 100%; overflow: hidden;", this
    }, t.toDataURL = function(t) {
        return t && s.call(this, t), h.toDataURL()
    }, t.toImage = function(t, e) {
        s.call(this, t);
        var i = new Image;
        return e && (i.onload = e), i.src = h.toDataURL(), i
    }
}();