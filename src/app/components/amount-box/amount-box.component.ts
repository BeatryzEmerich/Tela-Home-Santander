import { Component, OnInit } from '@angular/core';
import { AmountDataModel } from '../../model/AmountDataModel';
import { AccountsService } from 'src/app/services/accounts.service';

@Component({
	selector: 'app-amount-box',
	templateUrl: './amount-box.component.html',
	styleUrls: ['./amount-box.component.css']
})
export class AmountBoxComponent implements OnInit {
	accountDetails: AmountDataModel = {
		amountValue: 102.009,
		limit: 0,
		totalAmount: 103.009
	}

	constructor(private service: AccountsService) { }

	ngOnInit(): void {
		this.getAmountValues();
	}

	getAmountValues() {

		this.service.getAccount().subscribe(data => {
			this.accountDetails.amountValue = data.account.balance
			this.accountDetails.limit = data.account.limit
			this.accountDetails.totalAmount =
				this.accountDetails.amountValue + this.accountDetails.limit
		})

		console.log(this.accountDetails)
	}

}