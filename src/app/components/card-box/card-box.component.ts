import { Component, OnInit } from '@angular/core';
import { AccountDataModel } from '../../model/AccountDataModel';
import { AccountsService } from '../../services/accounts.service';


@Component({
	selector: 'app-card-box',
	templateUrl: './card-box.component.html',
	styleUrls: ['./card-box.component.css']
})
export class CardBoxComponent implements OnInit {
	accountData: AccountDataModel = {
		name: "Bia",
		account: {
			agency: "0003",
			number: "43.054150-9"
		},
		card: {
			limit: 102.009,
			number: "0515"
		}
	};

	constructor(private service: AccountsService) { }

	ngOnInit(): void {
		this.getAccountData()
	}

	getAccountData() {
		this.service.getAccount().subscribe(data => {
			this.accountData.name = data.name;
			this.accountData.account.agency = data.account.agency;
			this.accountData.card.limit = data.card.limit;
			this.accountData.account.number = data.account.number;
			this.accountData.card.number = data.card.number.split(" ")[3];
		})
	}
}