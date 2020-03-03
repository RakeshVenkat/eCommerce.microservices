const express = require('express');
const router = express.Router();
import fs from 'fs';
import {schema} from './schema';
import { validate, POST_REQUEST_ARG } from '../../common/validate';
import products from '../../data/products.json';
import {cartFs} from '../../app';
import { v4 as uuidv4 } from 'uuid';

router.post('/create/', 
    validate(schema.create.req, POST_REQUEST_ARG),
    (req, res, next) => {
        const {products} = req.body;
        let cart = {
            id: uuidv4(),
            products
        }
        // Write products into FS
        fs.appendFile(cartFs, JSON.stringify(cart), 'utf8', (err, data) => {
            if (err) {
                res.status(500).send({
                    success: null,
                    error: 'Cart could not be created. See error for more details!!',
                    data: {
                        err
                    }
                })
            } 
            res.send({
                success: 'Cart created successfully and products were added to the cart.',
                error: null,
                data: {
                    id: cart.id
                }
            }) 
        })
    }
    )

module.exports = router;