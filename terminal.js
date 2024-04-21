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
            

            window.onerror = this.onError;
            
        }


        onError(message, source, lineno, colno, error) {
            // Log error message to console
            console.error("Custom Error Handler Triggered:");
            console.error("Error Message: " + message);
            console.error("Source: " + source);
            console.error("Line Number: " + lineno);
            console.error("Column Number: " + colno);
            console.log(this);

            // Check if error object is present
            if (error) {
                console.error("Error Object: ", error);
            }

            // Additionally, you can check the type of error and log additional information accordingly
            if (error instanceof Error) {
                console.error("Error Stack: ", error.stack);
            }
        };

        keyDown(event){
            if(event.key == "Enter" && event.shiftKey == false){
                terminal.shouldClearText = true;
            }
        }
        inputChange(event){
            if(terminal.shouldClearText){
                terminal.shouldClearText = false;
                terminal.runCommand(this.value)
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
        runCommand(command){
            this.log(eval(command))
            try {
                this.log(eval(command))
            } catch (error) {
                this.log(error)
            }
        }
        error(event){

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