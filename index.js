const generatePDF = async(name) => {
    const { PDFDocument, rgb } = PDFLib;

    const exBytes = await fetch("./bdaycert.pdf").then((res) => {
        return res.arrayBuffer()
    });
    // console.log(exBytes);
    const exFonts = await fetch("Sanchez-Regular.ttf").then((res) => {
        return res.arrayBuffer()
    });

    const pdfDoc = await PDFDocument.load(exBytes)
    pdfDoc.registerFontkit(fontkit);
    const myFont = await pdfDoc.embedFont(exFonts);

    const pages = pdfDoc.getPages();
    const firstPg = pages[0];
    firstPg.drawText(name, {
        x: 310,
        y: 300,
        size: 54,
        color: rgb(1,0.6,1)
    })
    const uri = await pdfDoc.saveAsBase64({dataUri: true})
    // window.open(uri)
    // document.querySelector("#mypdf").src = uri;
}
generatePDF("Soham Das")