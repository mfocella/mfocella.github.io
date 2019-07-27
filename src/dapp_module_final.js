//file for Dapp javascript module

var ipfsAPI = require('ipfs-api');
var Buffer = require('buffer/').Buffer;
var ipfs;
var buffer;
var web3;

var TwoPartyLegalContract;
var compiledcontract;






/////////Solidity Code//////////


//insertcompiledcodehere
var bytecode="0x" + "61016060408190526000610140818152608090815260a08290524260c05260e0829052610100829052610120829052916200003d90829081620003e4565b50602082015160018201805491151560ff199283161790556040830151600280840191909155606084015160038401556080840151600484018054911515919093161790915560a090920151600590910155600b553480156200009f57600080fd5b506040516200191b3803806200191b8339810160409081528151602080840151928401516060850151608086015160a08701519287018051959790959281019491019291620000f59160009190870190620003e4565b506004805482151560ff199091161790556040805160a081018252838152815160608181018452603782527f496e697469616c20446f63756d656e742055706c6f6164656420647572696e676020838101919091527f207769746820436f6e7472616374204372656174696f6e000000000000000000838601528084019290925260009383018490524290830152608082018690526006805460018101808355919094528251805191946005027ff652222313e28459528d920b65115c16c04f3efc82aaedc97be59f3f377c0d3f0192620001d692849290910190620003e4565b506020828101518051620001f19260018501920190620003e4565b5060408201516002820155606082015160038201556080820151805162000223916004840191602090910190620003e4565b505060078054600160a060020a03808b16600160a060020a03199283161792839055600880548b83169316929092179091556040805160a0810182526001606082019081527f58000000000000000000000000000000000000000000000000000000000000006080830152815281516020808201845260008083528184019290925260028385015294909316835260098452912081518051929550909350620002d1928492910190620003e4565b506020828101518051620002ec9260018501920190620003e4565b50604082015160028201805460ff191660018360038111156200030b57fe5b0217905550506040805160a0810182526001606082019081527f580000000000000000000000000000000000000000000000000000000000000060808301528152815160208082018452600080835281840192909252600283850152600854600160a060020a03168252600981529290208151805192945090926200039692849290910190620003e4565b506020828101518051620003b19260018501920190620003e4565b50604082015160028201805460ff19166001836003811115620003d057fe5b021790555090505050505050505062000489565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200042757805160ff191683800117855562000457565b8280016001018555821562000457579182015b82811115620004575782518255916020019190600101906200043a565b506200046592915062000469565b5090565b6200048691905b8082111562000465576000815560010162000470565b90565b61148280620004996000396000f3006080604052600436106100825763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416630578420681146100875780632ff99ce0146100d75780633ff91d14146101eb5780636206e834146102d45780636c2e51ae146102fb578063a3fb12bb146103a5578063a4929c891461050f575b600080fd5b34801561009357600080fd5b5061009c6105c7565b6040518082600260200280838360005b838110156100c45781810151838201526020016100ac565b5050505090500191505060405180910390f35b3480156100e357600080fd5b506100f8600160a060020a0360043516610693565b60405180806020018060200184600381111561011057fe5b60ff168152602001838103835286818151815260200191508051906020019080838360005b8381101561014d578181015183820152602001610135565b50505050905090810190601f16801561017a5780820380516001836020036101000a031916815260200191505b50838103825285518152855160209182019187019080838360005b838110156101ad578181015183820152602001610195565b50505050905090810190601f1680156101da5780820380516001836020036101000a031916815260200191505b509550505050505060405180910390f35b3480156101f757600080fd5b506040805160206004803580820135601f81018490048402850184019095528484526102c094369492936024939284019190819084018382808284375050604080516020601f89358b018035918201839004830284018301909452808352979a99988101979196509182019450925082915084018382808284375050604080516020601f89358b018035918201839004830284018301909452808352979a9998810197919650918201945092508291508401838280828437509497506108749650505050505050565b604080519115158252519081900360200190f35b3480156102e057600080fd5b506102e9610a57565b60408051918252519081900360200190f35b34801561030757600080fd5b5060408051602060046024803582810135601f81018590048502860185019096528585526102c0958335600160a060020a031695369560449491939091019190819084018382808284375050604080516020601f89358b018035918201839004830284018301909452808352979a9998810197919650918201945092508291508401838280828437509497505050923560ff169350610a5d92505050565b3480156103b157600080fd5b506103bd600435610dd6565b60405180806020018060200186815260200185815260200180602001848103845289818151815260200191508051906020019080838360005b8381101561040e5781810151838201526020016103f6565b50505050905090810190601f16801561043b5780820380516001836020036101000a031916815260200191505b5084810383528851815288516020918201918a019080838360005b8381101561046e578181015183820152602001610456565b50505050905090810190601f16801561049b5780820380516001836020036101000a031916815260200191505b50848103825285518152855160209182019187019080838360005b838110156104ce5781810151838201526020016104b6565b50505050905090810190601f1680156104fb5780820380516001836020036101000a031916815260200191505b509850505050505050505060405180910390f35b34801561051b57600080fd5b506105246110d5565b60405180806020018715151515815260200186815260200185151515158152602001848152602001838152602001828103825288818151815260200191508051906020019080838360005b8381101561058757818101518382015260200161056f565b50505050905090810190601f1680156105b45780820380516001836020036101000a031916815260200191505b5097505050505050505060405180910390f35b6105cf6112a7565b60045460ff1615156106565733600090815260096020526040902054600260001961010060018416150201909116041515610656576040805160e560020a62461bcd02815260206004820152602f60248201526000805160206114378339815191526044820152600080516020611417833981519152606482015290519081900360840190fd5b60408051808201918290529060079060029082845b8154600160a060020a0316815260019091019060200180831161066b57505050505090505b90565b600454606090819060009060ff1615156107225733600090815260096020526040902054600260001961010060018416150201909116041515610722576040805160e560020a62461bcd02815260206004820152602f60248201526000805160206114378339815191526044820152600080516020611417833981519152606482015290519081900360840190fd5b600160a060020a03841660009081526009602090815260409182902060028082015482548551610100600180841615919091026000190190921693909304601f810186900486028401860190965285835292949285019360ff9091169285918301828280156107d25780601f106107a7576101008083540402835291602001916107d2565b820191906000526020600020905b8154815290600101906020018083116107b557829003601f168201915b5050855460408051602060026001851615610100026000190190941693909304601f8101849004840282018401909252818152959850879450925084019050828280156108605780601f1061083557610100808354040283529160200191610860565b820191906000526020600020905b81548152906001019060200180831161084357829003601f168201915b505050505091509250925092509193909250565b3360009081526009602052604081205481906002600019610100600184161502019091160415156108f1576040805160e560020a62461bcd02815260206004820152602f60248201526000805160206114378339815191526044820152600080516020611417833981519152606482015290519081900360840190fd5b6108fb600261122f565b151560011461097a576040805160e560020a62461bcd02815260206004820152603e60248201527f446f63756d656e74206973204c6f636b65642e2020426f74682050617274696560448201527f7320737461747573657320617265206e6f74206e65676f74696174696e670000606482015290519081900360840190fd5b506005805460019081018083556040805160a0810182528781526020808201889052918101839052426060820152608081018990526006805494850180825560009190915281518051949691959294929091027ff652222313e28459528d920b65115c16c04f3efc82aaedc97be59f3f377c0d3f01926109ff928492909101906112c2565b506020828101518051610a1892600185019201906112c2565b50604082015160028201556060820151600382015560808201518051610a489160048401916020909101906112c2565b50600198975050505050505050565b600b5481565b33600090815260096020526040812054600260001961010060018416150201909116041515610ad8576040805160e560020a62461bcd02815260206004820152602f60248201526000805160206114378339815191526044820152600080516020611417833981519152606482015290519081900360840190fd5b83511515610b30576040805160e560020a62461bcd02815260206004820152601a60248201527f546865206e616d65206d757374206e6f7420626520656d707479000000000000604482015290519081900360640190fd5b60015460ff1615610bb1576040805160e560020a62461bcd02815260206004820152603d60248201527f54686520636f6e747261637420686173206265656e207369676e6564206e6f2060448201527f66757274686572206d6f64696669636174696f6e7320616c6c6f776564000000606482015290519081900360840190fd5b600160a060020a038516600090815260096020526040902054600260001961010060018416150201909116041515610d155733600090815260096020526040808220600160a060020a038816835291208154610c23908290849060026000196101006001841615020190911604611340565b5060018201816001019080546001816001161561010002031660029004610c4b929190611340565b50600282810154908201805460ff9092169160ff19166001836003811115610c6f57fe5b021790555050600754600160a060020a03163314159050610cb7576007805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a038716179055610ce0565b6008805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0387161790555b33600090815260096020526040812090610cfa82826113b5565b610d086001830160006113b5565b50600201805460ff191690555b600160a060020a03851660009081526009602090815260409091208551610d3e928701906112c2565b50600160a060020a03851660009081526009602090815260409091208451610d6e926001909201918601906112c2565b50600160a060020a0385166000908152600960205260409020600201805483919060ff19166001836003811115610da157fe5b0217905550610db0600061122f565b151560011415610dcb576001805460ff191681179055426003555b506001949350505050565b60045460609081906000908190839060ff161515610e695733600090815260096020526040902054600260001961010060018416150201909116041515610e69576040805160e560020a62461bcd02815260206004820152602f60248201526000805160206114378339815191526044820152600080516020611417833981519152606482015290519081900360840190fd5b6006805487908110610e7757fe5b9060005260206000209060050201600001600687815481101515610e9757fe5b9060005260206000209060050201600101600688815481101515610eb757fe5b906000526020600020906005020160020154600689815481101515610ed857fe5b90600052602060002090600502016003015460068a815481101515610ef957fe5b9060005260206000209060050201600401848054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610f9f5780601f10610f7457610100808354040283529160200191610f9f565b820191906000526020600020905b815481529060010190602001808311610f8257829003601f168201915b5050875460408051602060026001851615610100026000190190941693909304601f8101849004840282018401909252818152959a508994509250840190508282801561102d5780601f106110025761010080835404028352916020019161102d565b820191906000526020600020905b81548152906001019060200180831161101057829003601f168201915b5050845460408051602060026001851615610100026000190190941693909304601f8101849004840282018401909252818152959950869450925084019050828280156110bb5780601f10611090576101008083540402835291602001916110bb565b820191906000526020600020905b81548152906001019060200180831161109e57829003601f168201915b505050505090509450945094509450945091939590929450565b600454606090600090819081908190819060ff16151561116a573360009081526009602052604090205460026000196101006001841615020190911604151561116a576040805160e560020a62461bcd02815260206004820152602f60248201526000805160206114378339815191526044820152600080516020611417833981519152606482015290519081900360840190fd5b600180546002805460045460035460055460008054604080516020601f6000199c851615610100029c909c0190931698909804998a018290048202880182019052888752909760ff97881697959694909516949293919288918301828280156112145780601f106111e957610100808354040283529160200191611214565b820191906000526020600020905b8154815290600101906020018083116111f757829003601f168201915b50505050509550955095509550955095509550909192939495565b6000805b600281101561129c5782600381111561124857fe5b600960006007846002811061125957fe5b0154600160a060020a0316815260208101919091526040016000206002015460ff16600381111561128657fe5b1461129457600091506112a1565b600101611233565b600191505b50919050565b60408051808201825290600290829080388339509192915050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061130357805160ff1916838001178555611330565b82800160010185558215611330579182015b82811115611330578251825591602001919060010190611315565b5061133c9291506113fc565b5090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106113795780548555611330565b8280016001018555821561133057600052602060002091601f016020900482015b8281111561133057825482559160010191906001019061139a565b50805460018160011615610100020316600290046000825580601f106113db57506113f9565b601f0160209004906000526020600020908101906113f991906113fc565b50565b61069091905b8082111561133c576000815560010161140256006e207468697320636f6e74726163740000000000000000000000000000000000596f7520617265206e6f74206f6e65206f66207468652070617274696573206fa165627a7a72305820d855d06e427121790ab55d44820d0f9cad5d20b8f929e7d55a7c6dea7698bfdb0029"


//insertabihere
var abiinterface=[{"constant":true,"inputs":[],"name":"partiesAddresses_pub","outputs":[{"name":"","type":"address[2]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"i","type":"address"}],"name":"parties_pub","outputs":[{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"hash","type":"string"},{"name":"filename","type":"string"},{"name":"comment","type":"string"}],"name":"updateDocument","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"leth_ContractVersion","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"adr","type":"address"},{"name":"name","type":"string"},{"name":"email","type":"string"},{"name":"p_status","type":"uint8"}],"name":"updateParty","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"i","type":"uint256"}],"name":"contractVersions_pub","outputs":[{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"mainContract_pub","outputs":[{"name":"","type":"string"},{"name":"","type":"bool"},{"name":"","type":"uint256"},{"name":"","type":"bool"},{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"party1","type":"address"},{"name":"party2","type":"address"},{"name":"name","type":"string"},{"name":"filehash","type":"string"},{"name":"filename","type":"string"},{"name":"worldreadable","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"}]


///////////////END/////////////





window.Dapp = {

    CleanNotifications: function(delaytime=5000) {
        setTimeout(function () {
            document.getElementById("update_notifications").innerHTML = "";
            document.getElementById("upload_notifications").innerHTML = "";
            document.getElementById("mainContractDeploymentText").innerHTML = "";
        }, delaytime);
    },

    CleanViews: function() {
        items = document.getElementsByClassName("viewcleanup");
        for (var i=0; i < items.length; i++) {
            items[i].innerHTML = "";
        }
    },

    VerifyIPFS: function() {
        ipfs.id(function(error, result) {
            if (error) {
                document.getElementById("update_notifications").innerHTML = "<p>There was an error Connecting to IPFS.</p>";
                console.log("There was an error Connecting to IPFS: " + error);
            }
            else
            {
                console.log("Connected to IPFS node: ", result.id, result.agentVersion, result.protocolVersion);
            }
        })
        Dapp.CleanNotifications();
    },

    AddFileIPFS: function(file) {
       return new Promise(resolve => {
       var reader = new FileReader();
       reader.onload = function(e) {
           var buffer = Buffer.from(reader.result);
               ipfs.files.add(buffer, function(error, files){
                   if (error){
                       console.log("There was an error uploading the file which is: " + error);
                       document.getElementById("upload_notifications").innerHTML = "<p>There was an error when uploading the document to IPFS.</p>";
                   }
                   else {
                       console.log("Added file to IPFS.  Resulting with hash: " + files[0].hash + " and size: " + files[0].size.toString() + " and path: " + files[0].path);
                       resolve(files[0].hash);
                   }
               })
           }
       reader.readAsArrayBuffer(file);
       })
    },

    DeployMainContract: async function() {
        var address1 = document.getElementById("initialize_party1_address").value;
        var address2 = document.getElementById("initialize_party2_address").value;
        var name = document.getElementById("initialize_contract_name").value;
        var private_setting = document.getElementById("private_switch").checked;
        var files = document.getElementById("initialize_document").files;
        var filename = document.getElementById("initialize_document").files[0].name;
        var filehash = await Dapp.AddFileIPFS(files[0]);
        var TwoPartyLegalContract = new web3.eth.Contract(abiinterface);
        console.log("IPFS filehash is " + filehash);
        TwoPartyLegalContract.new( address1, address2, name, filehash, filename, private_setting,
            { data: bytecode, from: web3.eth.accounts[0] }, function(e, contract){
                if(e) { console.log("There was an error deploying the contract: " + e);
                } else {
                    console.log("Deploying TwoPartyLegalContract");
                    if(!contract.address) {
                        console.log("Check Metamask for transaction details and status");
                    } else {
                        alert("The contract has been created.  Please save/use contract Address: " + contract.address);
                        console.log("The Contract has been created.  Address: " + contract.address);
                    }
                }
        })
        Dapp.CleanNotifications(15000);
    },

    ConvertStatus: function(status) {
        statuses = ["Signed", "Review", "Negotiating", "Rejected"];
        return statuses[status];
    },

    GetMainContractData: function(myLegalContract) {
        return new Promise(resolve => {
            myLegalContract.mainContract_pub.call( function(error,response) {
                if (error) {
                    console.log("There was an error getting the main contract details.  Error is: \n " + error);
                }
                else {
                    console.log("The main contract details response is " + response);
                    var responsearray = response.toString().split(",");
                    var main_contract_details = {name: responsearray[0], signed: responsearray[1], time_created: "", time_signed: "", world_readable: responsearray[3], current_doc_version: responsearray[5]};
                    main_contract_details.time_created = new Date(responsearray[2] * 1000);
                    if (responsearray[4] == "0") {
                        main_contract_details.time_signed = "";
                    } else {
                        main_contract_details.time_signed = new Date(responsearray[4] * 1000);
                    }
                    resolve(main_contract_details);
                }
            })
        })
    },

    GetPartiesAddresses: function(myLegalContract) {
        return new Promise(resolve=> {
            var addresses = [];
            myLegalContract.partiesAddresses_pub.call( function(error,response){
                if (error) {
                    console.log("There was an error getting parties addresses.  Error is: \n" + error);
                }
                else {
                    console.log("The parties addresses are " + response);
                    responsearray = response.toString().split(",");
                    resolve(responsearray);
                }
            })
        })
    },

    GetPartyDetails: function(myLegalContract,address) {
        return new Promise(resolve=> {
            myLegalContract.parties_pub.call([address], function(error,response) {
                if (error) {
                    console.log("There was an error getting party details.  Error is: \n" + error);
                }
                else {
                    console.log("The party details response is " + response);
                    responsearray = response.toString().split(",");
                    party_details = {name: responsearray[0], email: responsearray[1], status: responsearray[2], address: address};
                    resolve(party_details);
                }
            })
        })
    },

    GetBothPartyDetails: async function(myLegalContract,addresses){
        var bothpartydetails = [];
        for(i=0;i<2;i++){
            var partydetails = await Dapp.GetPartyDetails(myLegalContract,addresses[i]);
            bothpartydetails[i] = partydetails;
        }
        return bothpartydetails;
    },

    GetDocumentVersion: function(myLegalContract,currentversion) {
        return new Promise(resolve=>{
        myLegalContract.contractVersions_pub.call( [currentversion], function(error,response){
            if (error) {
                    console.log("There was an error getting the contract file details.  Error is \n" + error);
                }
                else {
                    console.log("The contract file details response is " + response);
                    var responsearray = response.toString().split(",");
                    var file_details = {version_number: responsearray[2], last_updated: "", filehash: responsearray[4], name: responsearray[0], comment: responsearray[1]};
                    file_details.last_updated = new Date(responsearray[3] * 1000);
                    resolve(file_details);
                }
            })

        })
    },

    CreateContractInstance: function() {
        var LegalContract = new web3.eth.Contract(abiinterface);
        var mainContractAddress = document.getElementById("contract_address").value;
        var myLegalContract = LegalContract.at(mainContractAddress);
        return myLegalContract;
    },

    ClickViewTab: async function() {
        Dapp.CleanViews();
        LegalContract = Dapp.CreateContractInstance();
        var maincontractdetails = await Dapp.GetMainContractData(LegalContract);
        var partiesaddresses = await Dapp.GetPartiesAddresses(LegalContract);
        var partydets = await Dapp.GetPartyDetails(LegalContract,partiesaddresses[0]);
        var partiesdetails = await Dapp.GetBothPartyDetails(LegalContract,partiesaddresses);
        document.getElementById("main_contract_details").innerHTML = "<p>Time Contract Created: " + maincontractdetails.time_created + "</p><p>Time Contract Signed: " + maincontractdetails.time_signed + "</p><p>Signed: <span id=\"signed_status\">" + maincontractdetails.signed + "</span></p><p>Outsiders Can View: " + maincontractdetails.world_readable + "</p><p>Associated Document Version: " + maincontractdetails.current_doc_version + "</p>"; document.getElementById("contract_name").innerHTML="<p>" + maincontractdetails.name + "</p>"; $( "#signed_status:contains('false')" ).css('color', 'red'); $( "#signed_status:contains('true')" ).css('color', 'green');
        for(i=0;i<2;i++){
            partiesdetails[i].status = Dapp.ConvertStatus(partiesdetails[i].status);
            if(partiesdetails[i].address == web3.eth.accounts[0]) {
                document.getElementById("party1_view_column").innerHTML = "<p>My Address: " + partiesdetails[i].address + "</p><p>Name: " + partiesdetails[i].name + "</p><p>Email: " + partiesdetails[i].email + "</p><p>Status: " + partiesdetails[i].status + "</p>";
            } else {
                document.getElementById("party2_view_column").innerHTML = "<p>Their Address: " + partiesdetails[i].address + "</p><p>Name: " + partiesdetails[i].name + "</p><p>Email: " + partiesdetails[i].email + "</p><p>Status: " + partiesdetails[i].status + "</p>";
            }
        }
        var current_version = maincontractdetails.current_doc_version;
        for(i=current_version;i>=0;i--){
            var versiondetails = await Dapp.GetDocumentVersion(LegalContract,i);
            if(i == current_version) {
                document.getElementById("document_view_details").innerHTML = "<p>Document Name: " + versiondetails.name + "</p><p>Comment: " + versiondetails.comment + "</p><p>Document Hash: " + versiondetails.filehash + "</p><p>Document Last Updated: " + versiondetails.last_updated + "</p><p>Document Version: " + versiondetails.version_number + "</p><p></p> <a href=\"https://ipfs.infura.io:5001/api/v0/cat?arg=" + versiondetails.filehash + "\" download><button title=\"To Download file, right click save link as and use the complete Document Name including file extension\">Download File</button></a><span id=download_hint>  Hover over button for instructions</span>";
            } else {
                $("#previous_contracts").append("<p>Document Name: " + versiondetails.name + "</p><p>Comment: " + versiondetails.comment + "</p><p>Document Hash: " + versiondetails.filehash + "</p><p>Document Last Updated: " + versiondetails.last_updated + "</p><p>Document Version: " + versiondetails.version_number + "</p><p></p> <a href=\"https://ipfs.infura.io:5001/api/v0/cat?arg=" + versiondetails.filehash + "\" download><button>Download File</button></a><p></p><p></p>");
            }
        }
        Dapp.CleanNotifications();
    },

    ClickUploadTab: async function() {
        Dapp.CleanViews();
        var LegalContract = Dapp.CreateContractInstance();
        var partiesaddresses = await Dapp.GetPartiesAddresses(LegalContract);
        var partiesdetails = await Dapp.GetBothPartyDetails(LegalContract,partiesaddresses);
         for(i=0;i<2;i++){
            partiesdetails[i].status = Dapp.ConvertStatus(partiesdetails[i].status);
            if(partiesdetails[i].address == web3.eth.accounts[0]) {
                document.getElementById("document_upload_status_p1").innerHTML = "<p>Our Status: " + partiesdetails[i].status + " </p>";
            } else {
                document.getElementById("document_upload_status_p2").innerHTML = "<p>Their Status: " + partiesdetails[i].status + " </p>";
            }
        }
        if (document.getElementById("document_upload_status_p1").innerHTML.includes("Negotiating") == false || document.getElementById("document_upload_status_p2").innerHTML.includes("Negotiating") == false) {
            document.getElementById("document_upload_status").innerHTML = "<p>Document Uploading is not allowed because both Parties must be Negotiating.</p>";
        }
        Dapp.CleanNotifications();
    },

    UploadContractFile: async function() {
        if (document.getElementById("document_upload_status_p1").innerHTML.includes("Negotiating") == false || document.getElementById("document_upload_status_p2").innerHTML.includes("Negotiating") == false) {
            console.log("Cannot upload file because both statuses are not negotiating.");
            return alert("Both statuses must be Negotiating to upload a contract document.");
        }
        var LegalContract = Dapp.CreateContractInstance();
        var files = document.getElementById("updated_document_upload").files;
        var filehash = await Dapp.AddFileIPFS(files[0]);
        var filename = files[0].name;
        var comment = document.getElementById("file_comment").value;
        LegalContract.updateDocument(filehash, filename, comment, { from: web3.eth.accounts[0] }, function(error, response) {
            console.log("Uploading file hash: " + filehash);
            if (error) {
                document.getElementById("upload_notifications").innerHTML = "<p>There was an error when uploading the document.</p>";
                console.log("There was an error uploading the file hash to Ethereum.  The error is: " + error);
            }
            else {
                if(!response.address) {
                    console.log("Ethereum Transaction Created.  View details on Metamask.");
                } else {
                    console.log("The file hash has been successfully added to your contract.");
                }
            }
        })
        Dapp.CleanNotifications();
    },

    ClickUpdateTab: async function() {
        Dapp.CleanViews();
        var LegalContract = Dapp.CreateContractInstance();
        var partiesaddresses = await Dapp.GetPartiesAddresses(LegalContract);
        var partiesdetails = await Dapp.GetBothPartyDetails(LegalContract,partiesaddresses);
        for(i=0;i<2;i++){
            if(partiesdetails[i].address == web3.eth.accounts[0]) {
                console.log("Grabbed current party details."); document.getElementById("name_update").value = partiesdetails[i].name; document.getElementById("email_update").value = partiesdetails[i].email; document.getElementById("address_update").value = partiesdetails[i].address; document.getElementById("status_update").value = partiesdetails[i].status;
            }
        }
    Dapp.CleanNotifications();
    },


    UpdatePartyDetails: function() {
        var LegalContract = Dapp.CreateContractInstance();
        var name = document.getElementById("name_update").value;
        var email = document.getElementById("email_update").value;
        var address = document.getElementById("address_update").value;
        var status = document.getElementById("status_update").value;

        LegalContract.updateParty(address, name, email, status, { from: web3.eth.accounts[0] },  function(error, response) {
            console.log("Updating party with address: " + address + " name: " + name + " email: " + email + " status: " + status );
            if (error) {
                document.getElementById("upload_notifications").innerHTML = "<p>There was an error when updating Party Details.</p>";
                console.log("There was an error updating the party details in the contract.  The error is: " + error);
            }
            else {
                if(!response.address) {
                    console.log("View the status of your transaction in Metamask.");
                } else {
                    console.log("The party details have been updated in the contract.");
                }
            }
        })
        Dapp.CleanNotifications();
    }
}

window.addEventListener("load", function() {
    ipfs = ipfsAPI('ipfs.infura.io', '5001', {protocol: 'https'});
    Dapp.VerifyIPFS();
    Dapp.CleanNotifications();
    web3 = new Web3(window.web3.currentProvider);
});

// 0x9477c6902ed7016cbb8cc4076fbd7800c0914430
