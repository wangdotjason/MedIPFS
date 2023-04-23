import { create, IPFSHTTPClient } from "ipfs-http-client";
import { IFile } from "../interfaces/ifile.interface";
import { MedIPFSFile } from "../interfaces/MedIPFS-file.interface";

// here we handle the ipfs functionality. 
export class AppStorage {

    ipfs: IPFSHTTPClient;
    untar: any;
    constructor() {
        const projectId = "2Om9KgDZpAxw1iXYQvmcs31Bqjn"; 
        const projectSecret = "0cf9d01cd755aa3d020c0e9449ed3d91";
        const auth = 'Basic ' + Buffer.from(projectId + ':' + projectSecret).toString('base64');

        this.ipfs = create({
            host: 'ipfs.infura.io',
            port: 5001,
            protocol: 'https',
            apiPath: '/api/v0',
            headers: {
                authorization: auth,
            }
        });
        this.initialize();
    }

    private async initialize() {
        if(typeof window === "undefined") return;
        this.untar = await require("js-untar");
    }

    async upload(file: IFile) {
        if(!file || !file.buffer) throw 'file not provided';
        if(!this.ipfs) throw 'ipfs not initialized';
        const blob = new Blob([file.buffer], { type: file.type });
        const result = await this.ipfs.add(blob);
        return result;
     }

    async download(file: MedIPFSFile) {
        if(typeof window === "undefined") return;
        const iterable = this.ipfs.get(file.filePath);
        var chunks: Uint8Array[] = [];
        for await (const b of iterable) {
            chunks.push(b);
        }
        const tarball = new Blob(chunks, { type: 'application/x-tar' })
        const tarAsArrayBuffer = await tarball.arrayBuffer();
        const result = await this.untar(tarAsArrayBuffer);
        const resultFile = new Blob([result[0].buffer], { type: file.fileType })
        var url = window.URL.createObjectURL(resultFile);
        this.downloadURL(url, file.fileName);
    }

    private downloadURL(data: any, fileName: string) {
        var a;
        a = document.createElement('a');
        a.href = data;
        a.download = fileName;
        document.body.appendChild(a);
        a.click();
        a.remove();
    };

    listFiles() { }

}