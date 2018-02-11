import chai = require('chai');
import chaiAsPromised = require('chai-as-promised');
import chaiSmoothie = require('chai-smoothie');


chai.use(chaiSmoothie)
	.use(chaiAsPromised);

export const expect = chai.expect;
