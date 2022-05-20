const SchemaSym = Symbol('shcemas');

function Schema(key: string, shcema: any) {
  return function (ctr: Function) {
    ctr.prototype[SchemaSym] = ctr.prototype[SchemaSym] || {};
    ctr.prototype[SchemaSym][key] = shcema;
  };
}

@Schema('all', { all: true })
@Schema('sh', { sh: true })
class PersonService {
  test() {
    console.log((this as any)[SchemaSym]);
  }
}

const service = new PersonService();
service.test();
console.log('Yayyy');
