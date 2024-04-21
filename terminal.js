new function (){
    class Terminal {
        terminalPanel
        #showing
        shouldClearText


        constructor(){
            this.#showing = false;
            this.shouldClearText = false;
            this.terminalPanel = {
                terminal:document.getElementById("terminal"),
                terminalPrompt:document.getElementById("terminalPrompt"),
                terminalPromptArrow:document.getElementById("terminalPromptArrow"),
                terminalPromptTextBox:document.getElementById("terminalPromptTextBox"),
            }

            this.terminalPanel.terminalPromptTextBox.addEventListener("input",this.inputChange)
            this.terminalPanel.terminalPromptTextBox.addEventListener("keydown",this.keyDown)
        }
        keyDown(event){
            console.log(event)
            console.log(this)
            if(event.key == "Enter" && event.shiftKey == false){
                terminal.shouldClearText = true;
            }
        }
        inputChange(event){
            console.log(event)
            console.log(this)
            console.log(this.value)
            if(terminal.shouldClearText){
                terminal.shouldClearText = false;
                this.value = "";
            }

            var lines = 1;
            for(var i = 0;i < this.value.length;i++){
                if(this.value[i] == "\n"){
                    lines++;
                }
            }
            var height = (lines * 17) + "px" 
            var overflowy;
            if(lines * 17 > innerHeight * 0.3){
                overflowy = "scroll";
            } else {
                overflowy = "hidden";
            }
            this.style = `height:${height}; overflow-y:${overflowy};`
        }
        log(out){
            console.log(out)
        }
        show(){
            if(this.#showing == false){

            }
        }

    }
    window.terminal = new Terminal()
}