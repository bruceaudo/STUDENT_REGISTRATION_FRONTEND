class Flash
{
    constructor(flashContainer, flashMessage)
    {
        this.flashMessage = document.getElementById(flashMessage).innerHTML
        this.flashContainer = document.getElementById(flashContainer)

        this.flashMessage = ""
        this.flashContainer.style.visibility = "hidden"
    }
}