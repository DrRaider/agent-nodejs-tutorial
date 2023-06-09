/* eslint-disable */
export type Schema = {
  'address': {
    plain: {
      'id': number;
      'customer_id': number;
      'first_name': string;
      'last_name': string;
      'company': string;
      'country_code': string;
      'street': string;
      'city': string;
      'postcode': string;
      'phone_number': string;
    };
    nested: {
      'customer': Schema['customer']['plain'] & Schema['customer']['nested'];
    };
    flat: {
      'customer:id': number;
      'customer:first_name': string;
      'customer:last_name': string;
      'customer:email': string;
      'customer:company': string;
      'customer:gender': string;
      'customer:birthday': string;
      'customer:created_at': string;
      'customer:updated_at': string;
      'customer:full_name': string;
      'customer:total_orders': number;
      'customer:last_order_id': number;
      'customer:total_revenue': number;
      'customer:last_order:id': number;
      'customer:last_order:number': string;
      'customer:last_order:total': number;
      'customer:last_order:state': string;
      'customer:last_order:owner': string;
      'customer:last_order:customer_id': number;
      'customer:last_order:created_at': string;
      'customer:last_order:updated_at': string;
      'customer:last_order:customer:id': number;
      'customer:last_order:customer:first_name': string;
      'customer:last_order:customer:last_name': string;
      'customer:last_order:customer:email': string;
      'customer:last_order:customer:company': string;
      'customer:last_order:customer:gender': string;
      'customer:last_order:customer:birthday': string;
      'customer:last_order:customer:created_at': string;
      'customer:last_order:customer:updated_at': string;
      'customer:last_order:customer:full_name': string;
      'customer:last_order:customer:total_orders': number;
      'customer:last_order:customer:last_order_id': number;
      'customer:last_order:customer:total_revenue': number;
      'customer:last_order:customer:last_order:id': number;
      'customer:last_order:customer:last_order:number': string;
      'customer:last_order:customer:last_order:total': number;
      'customer:last_order:customer:last_order:state': string;
      'customer:last_order:customer:last_order:owner': string;
      'customer:last_order:customer:last_order:customer_id': number;
      'customer:last_order:customer:last_order:created_at': string;
      'customer:last_order:customer:last_order:updated_at': string;
      'customer:last_order:customer:last_order:customer:id': number;
      'customer:last_order:customer:last_order:customer:first_name': string;
      'customer:last_order:customer:last_order:customer:last_name': string;
      'customer:last_order:customer:last_order:customer:email': string;
      'customer:last_order:customer:last_order:customer:company': string;
      'customer:last_order:customer:last_order:customer:gender': string;
      'customer:last_order:customer:last_order:customer:birthday': string;
      'customer:last_order:customer:last_order:customer:created_at': string;
      'customer:last_order:customer:last_order:customer:updated_at': string;
      'customer:last_order:customer:last_order:customer:full_name': string;
      'customer:last_order:customer:last_order:customer:total_orders': number;
      'customer:last_order:customer:last_order:customer:last_order_id': number;
      'customer:last_order:customer:last_order:customer:total_revenue': number;
    };
  };
  'customer': {
    plain: {
      'id': number;
      'first_name': string;
      'last_name': string;
      'email': string;
      'company': string;
      'gender': string;
      'birthday': string;
      'created_at': string;
      'updated_at': string;
      'full_name': string;
      'total_orders': number;
      'last_order_id': number;
      'total_revenue': number;
    };
    nested: {
      'last_order': Schema['order']['plain'] & Schema['order']['nested'];
    };
    flat: {
      'last_order:id': number;
      'last_order:number': string;
      'last_order:total': number;
      'last_order:state': string;
      'last_order:owner': string;
      'last_order:customer_id': number;
      'last_order:created_at': string;
      'last_order:updated_at': string;
      'last_order:customer:id': number;
      'last_order:customer:first_name': string;
      'last_order:customer:last_name': string;
      'last_order:customer:email': string;
      'last_order:customer:company': string;
      'last_order:customer:gender': string;
      'last_order:customer:birthday': string;
      'last_order:customer:created_at': string;
      'last_order:customer:updated_at': string;
      'last_order:customer:full_name': string;
      'last_order:customer:total_orders': number;
      'last_order:customer:last_order_id': number;
      'last_order:customer:total_revenue': number;
      'last_order:customer:last_order:id': number;
      'last_order:customer:last_order:number': string;
      'last_order:customer:last_order:total': number;
      'last_order:customer:last_order:state': string;
      'last_order:customer:last_order:owner': string;
      'last_order:customer:last_order:customer_id': number;
      'last_order:customer:last_order:created_at': string;
      'last_order:customer:last_order:updated_at': string;
      'last_order:customer:last_order:customer:id': number;
      'last_order:customer:last_order:customer:first_name': string;
      'last_order:customer:last_order:customer:last_name': string;
      'last_order:customer:last_order:customer:email': string;
      'last_order:customer:last_order:customer:company': string;
      'last_order:customer:last_order:customer:gender': string;
      'last_order:customer:last_order:customer:birthday': string;
      'last_order:customer:last_order:customer:created_at': string;
      'last_order:customer:last_order:customer:updated_at': string;
      'last_order:customer:last_order:customer:full_name': string;
      'last_order:customer:last_order:customer:total_orders': number;
      'last_order:customer:last_order:customer:last_order_id': number;
      'last_order:customer:last_order:customer:total_revenue': number;
      'last_order:customer:last_order:customer:last_order:id': number;
      'last_order:customer:last_order:customer:last_order:number': string;
      'last_order:customer:last_order:customer:last_order:total': number;
      'last_order:customer:last_order:customer:last_order:state': string;
      'last_order:customer:last_order:customer:last_order:owner': string;
      'last_order:customer:last_order:customer:last_order:customer_id': number;
      'last_order:customer:last_order:customer:last_order:created_at': string;
      'last_order:customer:last_order:customer:last_order:updated_at': string;
    };
  };
  'customer_issue': {
    plain: {
      'id': number;
      'order_id': number;
      'owner': string;
      'state': string;
      'type': string;
      'created_at': string;
      'updated_at': string;
      'closed_at': string;
    };
    nested: {
      'order': Schema['order']['plain'] & Schema['order']['nested'];
    };
    flat: {
      'order:id': number;
      'order:number': string;
      'order:total': number;
      'order:state': string;
      'order:owner': string;
      'order:customer_id': number;
      'order:created_at': string;
      'order:updated_at': string;
      'order:customer:id': number;
      'order:customer:first_name': string;
      'order:customer:last_name': string;
      'order:customer:email': string;
      'order:customer:company': string;
      'order:customer:gender': string;
      'order:customer:birthday': string;
      'order:customer:created_at': string;
      'order:customer:updated_at': string;
      'order:customer:full_name': string;
      'order:customer:total_orders': number;
      'order:customer:last_order_id': number;
      'order:customer:total_revenue': number;
      'order:customer:last_order:id': number;
      'order:customer:last_order:number': string;
      'order:customer:last_order:total': number;
      'order:customer:last_order:state': string;
      'order:customer:last_order:owner': string;
      'order:customer:last_order:customer_id': number;
      'order:customer:last_order:created_at': string;
      'order:customer:last_order:updated_at': string;
      'order:customer:last_order:customer:id': number;
      'order:customer:last_order:customer:first_name': string;
      'order:customer:last_order:customer:last_name': string;
      'order:customer:last_order:customer:email': string;
      'order:customer:last_order:customer:company': string;
      'order:customer:last_order:customer:gender': string;
      'order:customer:last_order:customer:birthday': string;
      'order:customer:last_order:customer:created_at': string;
      'order:customer:last_order:customer:updated_at': string;
      'order:customer:last_order:customer:full_name': string;
      'order:customer:last_order:customer:total_orders': number;
      'order:customer:last_order:customer:last_order_id': number;
      'order:customer:last_order:customer:total_revenue': number;
      'order:customer:last_order:customer:last_order:id': number;
      'order:customer:last_order:customer:last_order:number': string;
      'order:customer:last_order:customer:last_order:total': number;
      'order:customer:last_order:customer:last_order:state': string;
      'order:customer:last_order:customer:last_order:owner': string;
      'order:customer:last_order:customer:last_order:customer_id': number;
      'order:customer:last_order:customer:last_order:created_at': string;
      'order:customer:last_order:customer:last_order:updated_at': string;
    };
  };
  'customer_issue_support': {
    plain: {
      'id': number;
      'customer_issue_id': number;
      'owner': string;
      'type': string;
      'description': string;
      'created_at': string;
      'updated_at': string;
    };
    nested: {
      'customer_issue': Schema['customer_issue']['plain'] & Schema['customer_issue']['nested'];
    };
    flat: {
      'customer_issue:id': number;
      'customer_issue:order_id': number;
      'customer_issue:owner': string;
      'customer_issue:state': string;
      'customer_issue:type': string;
      'customer_issue:created_at': string;
      'customer_issue:updated_at': string;
      'customer_issue:closed_at': string;
      'customer_issue:order:id': number;
      'customer_issue:order:number': string;
      'customer_issue:order:total': number;
      'customer_issue:order:state': string;
      'customer_issue:order:owner': string;
      'customer_issue:order:customer_id': number;
      'customer_issue:order:created_at': string;
      'customer_issue:order:updated_at': string;
      'customer_issue:order:customer:id': number;
      'customer_issue:order:customer:first_name': string;
      'customer_issue:order:customer:last_name': string;
      'customer_issue:order:customer:email': string;
      'customer_issue:order:customer:company': string;
      'customer_issue:order:customer:gender': string;
      'customer_issue:order:customer:birthday': string;
      'customer_issue:order:customer:created_at': string;
      'customer_issue:order:customer:updated_at': string;
      'customer_issue:order:customer:full_name': string;
      'customer_issue:order:customer:total_orders': number;
      'customer_issue:order:customer:last_order_id': number;
      'customer_issue:order:customer:total_revenue': number;
      'customer_issue:order:customer:last_order:id': number;
      'customer_issue:order:customer:last_order:number': string;
      'customer_issue:order:customer:last_order:total': number;
      'customer_issue:order:customer:last_order:state': string;
      'customer_issue:order:customer:last_order:owner': string;
      'customer_issue:order:customer:last_order:customer_id': number;
      'customer_issue:order:customer:last_order:created_at': string;
      'customer_issue:order:customer:last_order:updated_at': string;
      'customer_issue:order:customer:last_order:customer:id': number;
      'customer_issue:order:customer:last_order:customer:first_name': string;
      'customer_issue:order:customer:last_order:customer:last_name': string;
      'customer_issue:order:customer:last_order:customer:email': string;
      'customer_issue:order:customer:last_order:customer:company': string;
      'customer_issue:order:customer:last_order:customer:gender': string;
      'customer_issue:order:customer:last_order:customer:birthday': string;
      'customer_issue:order:customer:last_order:customer:created_at': string;
      'customer_issue:order:customer:last_order:customer:updated_at': string;
      'customer_issue:order:customer:last_order:customer:full_name': string;
      'customer_issue:order:customer:last_order:customer:total_orders': number;
      'customer_issue:order:customer:last_order:customer:last_order_id': number;
      'customer_issue:order:customer:last_order:customer:total_revenue': number;
    };
  };
  'order': {
    plain: {
      'id': number;
      'number': string;
      'total': number;
      'state': string;
      'owner': string;
      'customer_id': number;
      'created_at': string;
      'updated_at': string;
    };
    nested: {
      'customer': Schema['customer']['plain'] & Schema['customer']['nested'];
    };
    flat: {
      'customer:id': number;
      'customer:first_name': string;
      'customer:last_name': string;
      'customer:email': string;
      'customer:company': string;
      'customer:gender': string;
      'customer:birthday': string;
      'customer:created_at': string;
      'customer:updated_at': string;
      'customer:full_name': string;
      'customer:total_orders': number;
      'customer:last_order_id': number;
      'customer:total_revenue': number;
      'customer:last_order:id': number;
      'customer:last_order:number': string;
      'customer:last_order:total': number;
      'customer:last_order:state': string;
      'customer:last_order:owner': string;
      'customer:last_order:customer_id': number;
      'customer:last_order:created_at': string;
      'customer:last_order:updated_at': string;
      'customer:last_order:customer:id': number;
      'customer:last_order:customer:first_name': string;
      'customer:last_order:customer:last_name': string;
      'customer:last_order:customer:email': string;
      'customer:last_order:customer:company': string;
      'customer:last_order:customer:gender': string;
      'customer:last_order:customer:birthday': string;
      'customer:last_order:customer:created_at': string;
      'customer:last_order:customer:updated_at': string;
      'customer:last_order:customer:full_name': string;
      'customer:last_order:customer:total_orders': number;
      'customer:last_order:customer:last_order_id': number;
      'customer:last_order:customer:total_revenue': number;
      'customer:last_order:customer:last_order:id': number;
      'customer:last_order:customer:last_order:number': string;
      'customer:last_order:customer:last_order:total': number;
      'customer:last_order:customer:last_order:state': string;
      'customer:last_order:customer:last_order:owner': string;
      'customer:last_order:customer:last_order:customer_id': number;
      'customer:last_order:customer:last_order:created_at': string;
      'customer:last_order:customer:last_order:updated_at': string;
      'customer:last_order:customer:last_order:customer:id': number;
      'customer:last_order:customer:last_order:customer:first_name': string;
      'customer:last_order:customer:last_order:customer:last_name': string;
      'customer:last_order:customer:last_order:customer:email': string;
      'customer:last_order:customer:last_order:customer:company': string;
      'customer:last_order:customer:last_order:customer:gender': string;
      'customer:last_order:customer:last_order:customer:birthday': string;
      'customer:last_order:customer:last_order:customer:created_at': string;
      'customer:last_order:customer:last_order:customer:updated_at': string;
      'customer:last_order:customer:last_order:customer:full_name': string;
      'customer:last_order:customer:last_order:customer:total_orders': number;
      'customer:last_order:customer:last_order:customer:last_order_id': number;
      'customer:last_order:customer:last_order:customer:total_revenue': number;
    };
  };
  'order_item': {
    plain: {
      'id': number;
      'quantity': number;
      'unit_price': number;
      'total': number;
      'product_id': number;
      'order_id': number;
    };
    nested: {
      'product': Schema['product']['plain'] & Schema['product']['nested'];
      'order': Schema['order']['plain'] & Schema['order']['nested'];
    };
    flat: {
      'product:id': number;
      'product:name': string;
      'product:description': string;
      'product:price': number;
      'product:image_path': string;
      'product:orders_count': number;
      'product:total_revenue': number;
      'order:id': number;
      'order:number': string;
      'order:total': number;
      'order:state': string;
      'order:owner': string;
      'order:customer_id': number;
      'order:created_at': string;
      'order:updated_at': string;
      'order:customer:id': number;
      'order:customer:first_name': string;
      'order:customer:last_name': string;
      'order:customer:email': string;
      'order:customer:company': string;
      'order:customer:gender': string;
      'order:customer:birthday': string;
      'order:customer:created_at': string;
      'order:customer:updated_at': string;
      'order:customer:full_name': string;
      'order:customer:total_orders': number;
      'order:customer:last_order_id': number;
      'order:customer:total_revenue': number;
      'order:customer:last_order:id': number;
      'order:customer:last_order:number': string;
      'order:customer:last_order:total': number;
      'order:customer:last_order:state': string;
      'order:customer:last_order:owner': string;
      'order:customer:last_order:customer_id': number;
      'order:customer:last_order:created_at': string;
      'order:customer:last_order:updated_at': string;
      'order:customer:last_order:customer:id': number;
      'order:customer:last_order:customer:first_name': string;
      'order:customer:last_order:customer:last_name': string;
      'order:customer:last_order:customer:email': string;
      'order:customer:last_order:customer:company': string;
      'order:customer:last_order:customer:gender': string;
      'order:customer:last_order:customer:birthday': string;
      'order:customer:last_order:customer:created_at': string;
      'order:customer:last_order:customer:updated_at': string;
      'order:customer:last_order:customer:full_name': string;
      'order:customer:last_order:customer:total_orders': number;
      'order:customer:last_order:customer:last_order_id': number;
      'order:customer:last_order:customer:total_revenue': number;
      'order:customer:last_order:customer:last_order:id': number;
      'order:customer:last_order:customer:last_order:number': string;
      'order:customer:last_order:customer:last_order:total': number;
      'order:customer:last_order:customer:last_order:state': string;
      'order:customer:last_order:customer:last_order:owner': string;
      'order:customer:last_order:customer:last_order:customer_id': number;
      'order:customer:last_order:customer:last_order:created_at': string;
      'order:customer:last_order:customer:last_order:updated_at': string;
    };
  };
  'payment': {
    plain: {
      'id': number;
      'state': string;
      'amount': number;
      'currency_code': string;
      'details': string;
      'method_id': number;
      'order_id': number;
    };
    nested: {
      'method': Schema['payment_method']['plain'] & Schema['payment_method']['nested'];
      'order': Schema['order']['plain'] & Schema['order']['nested'];
    };
    flat: {
      'method:id': number;
      'method:code': string;
      'method:name': string;
      'method:description': string;
      'method:enabled': boolean;
      'method:created_at': string;
      'method:updated_at': string;
      'order:id': number;
      'order:number': string;
      'order:total': number;
      'order:state': string;
      'order:owner': string;
      'order:customer_id': number;
      'order:created_at': string;
      'order:updated_at': string;
      'order:customer:id': number;
      'order:customer:first_name': string;
      'order:customer:last_name': string;
      'order:customer:email': string;
      'order:customer:company': string;
      'order:customer:gender': string;
      'order:customer:birthday': string;
      'order:customer:created_at': string;
      'order:customer:updated_at': string;
      'order:customer:full_name': string;
      'order:customer:total_orders': number;
      'order:customer:last_order_id': number;
      'order:customer:total_revenue': number;
      'order:customer:last_order:id': number;
      'order:customer:last_order:number': string;
      'order:customer:last_order:total': number;
      'order:customer:last_order:state': string;
      'order:customer:last_order:owner': string;
      'order:customer:last_order:customer_id': number;
      'order:customer:last_order:created_at': string;
      'order:customer:last_order:updated_at': string;
      'order:customer:last_order:customer:id': number;
      'order:customer:last_order:customer:first_name': string;
      'order:customer:last_order:customer:last_name': string;
      'order:customer:last_order:customer:email': string;
      'order:customer:last_order:customer:company': string;
      'order:customer:last_order:customer:gender': string;
      'order:customer:last_order:customer:birthday': string;
      'order:customer:last_order:customer:created_at': string;
      'order:customer:last_order:customer:updated_at': string;
      'order:customer:last_order:customer:full_name': string;
      'order:customer:last_order:customer:total_orders': number;
      'order:customer:last_order:customer:last_order_id': number;
      'order:customer:last_order:customer:total_revenue': number;
      'order:customer:last_order:customer:last_order:id': number;
      'order:customer:last_order:customer:last_order:number': string;
      'order:customer:last_order:customer:last_order:total': number;
      'order:customer:last_order:customer:last_order:state': string;
      'order:customer:last_order:customer:last_order:owner': string;
      'order:customer:last_order:customer:last_order:customer_id': number;
      'order:customer:last_order:customer:last_order:created_at': string;
      'order:customer:last_order:customer:last_order:updated_at': string;
    };
  };
  'payment_method': {
    plain: {
      'id': number;
      'code': string;
      'name': string;
      'description': string;
      'enabled': boolean;
      'created_at': string;
      'updated_at': string;
    };
    nested: {};
    flat: {};
  };
  'product': {
    plain: {
      'id': number;
      'name': string;
      'description': string;
      'price': number;
      'image_path': string;
      'orders_count': number;
      'total_revenue': number;
    };
    nested: {};
    flat: {};
  };
  'product_attribute': {
    plain: {
      'id': number;
      'name': string;
      'type': string;
    };
    nested: {};
    flat: {};
  };
  'product_taxon': {
    plain: {
      'product_id': number;
      'taxon_id': number;
    };
    nested: {
      'product': Schema['product']['plain'] & Schema['product']['nested'];
      'taxon': Schema['taxon']['plain'] & Schema['taxon']['nested'];
    };
    flat: {
      'product:id': number;
      'product:name': string;
      'product:description': string;
      'product:price': number;
      'product:image_path': string;
      'product:orders_count': number;
      'product:total_revenue': number;
      'taxon:id': number;
      'taxon:name': string;
      'taxon:description': string;
    };
  };
  'product_variant': {
    plain: {
      'id': number;
      'code': string;
      'name': string;
      'price': number;
      'product_id': number;
    };
    nested: {
      'product': Schema['product']['plain'] & Schema['product']['nested'];
    };
    flat: {
      'product:id': number;
      'product:name': string;
      'product:description': string;
      'product:price': number;
      'product:image_path': string;
      'product:orders_count': number;
      'product:total_revenue': number;
    };
  };
  'shipping': {
    plain: {
      'id': number;
      'order_id': number;
      'method_id': number;
      'state': string;
      'amount': number;
    };
    nested: {
      'order': Schema['order']['plain'] & Schema['order']['nested'];
      'method': Schema['shipping_method']['plain'] & Schema['shipping_method']['nested'];
    };
    flat: {
      'order:id': number;
      'order:number': string;
      'order:total': number;
      'order:state': string;
      'order:owner': string;
      'order:customer_id': number;
      'order:created_at': string;
      'order:updated_at': string;
      'order:customer:id': number;
      'order:customer:first_name': string;
      'order:customer:last_name': string;
      'order:customer:email': string;
      'order:customer:company': string;
      'order:customer:gender': string;
      'order:customer:birthday': string;
      'order:customer:created_at': string;
      'order:customer:updated_at': string;
      'order:customer:full_name': string;
      'order:customer:total_orders': number;
      'order:customer:last_order_id': number;
      'order:customer:total_revenue': number;
      'order:customer:last_order:id': number;
      'order:customer:last_order:number': string;
      'order:customer:last_order:total': number;
      'order:customer:last_order:state': string;
      'order:customer:last_order:owner': string;
      'order:customer:last_order:customer_id': number;
      'order:customer:last_order:created_at': string;
      'order:customer:last_order:updated_at': string;
      'order:customer:last_order:customer:id': number;
      'order:customer:last_order:customer:first_name': string;
      'order:customer:last_order:customer:last_name': string;
      'order:customer:last_order:customer:email': string;
      'order:customer:last_order:customer:company': string;
      'order:customer:last_order:customer:gender': string;
      'order:customer:last_order:customer:birthday': string;
      'order:customer:last_order:customer:created_at': string;
      'order:customer:last_order:customer:updated_at': string;
      'order:customer:last_order:customer:full_name': string;
      'order:customer:last_order:customer:total_orders': number;
      'order:customer:last_order:customer:last_order_id': number;
      'order:customer:last_order:customer:total_revenue': number;
      'order:customer:last_order:customer:last_order:id': number;
      'order:customer:last_order:customer:last_order:number': string;
      'order:customer:last_order:customer:last_order:total': number;
      'order:customer:last_order:customer:last_order:state': string;
      'order:customer:last_order:customer:last_order:owner': string;
      'order:customer:last_order:customer:last_order:customer_id': number;
      'order:customer:last_order:customer:last_order:created_at': string;
      'order:customer:last_order:customer:last_order:updated_at': string;
      'method:id': number;
      'method:code': string;
      'method:name': string;
      'method:description': string;
      'method:calculator': string;
    };
  };
  'shipping_method': {
    plain: {
      'id': number;
      'code': string;
      'name': string;
      'description': string;
      'calculator': string;
    };
    nested: {};
    flat: {};
  };
  'taxon': {
    plain: {
      'id': number;
      'name': string;
      'description': string;
    };
    nested: {};
    flat: {};
  };
};
