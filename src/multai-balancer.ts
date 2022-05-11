// https://www.terraform.io/docs/providers/spotinst/r/multai_balancer
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MultaiBalancerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/multai_balancer#dns_cname_aliases MultaiBalancer#dns_cname_aliases}
  */
  readonly dnsCnameAliases?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/multai_balancer#name MultaiBalancer#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/multai_balancer#scheme MultaiBalancer#scheme}
  */
  readonly scheme?: string;
  /**
  * connection_timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/multai_balancer#connection_timeouts MultaiBalancer#connection_timeouts}
  */
  readonly connectionTimeouts?: MultaiBalancerConnectionTimeouts;
  /**
  * tags block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/multai_balancer#tags MultaiBalancer#tags}
  */
  readonly tags?: MultaiBalancerTags[] | cdktf.IResolvable;
}
export interface MultaiBalancerConnectionTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/multai_balancer#draining MultaiBalancer#draining}
  */
  readonly draining?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/multai_balancer#idle MultaiBalancer#idle}
  */
  readonly idle?: number;
}

export function multaiBalancerConnectionTimeoutsToTerraform(struct?: MultaiBalancerConnectionTimeoutsOutputReference | MultaiBalancerConnectionTimeouts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    draining: cdktf.numberToTerraform(struct!.draining),
    idle: cdktf.numberToTerraform(struct!.idle),
  }
}

export class MultaiBalancerConnectionTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MultaiBalancerConnectionTimeouts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._draining !== undefined) {
      hasAnyValues = true;
      internalValueResult.draining = this._draining;
    }
    if (this._idle !== undefined) {
      hasAnyValues = true;
      internalValueResult.idle = this._idle;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MultaiBalancerConnectionTimeouts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._draining = undefined;
      this._idle = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._draining = value.draining;
      this._idle = value.idle;
    }
  }

  // draining - computed: false, optional: true, required: false
  private _draining?: number; 
  public get draining() {
    return this.getNumberAttribute('draining');
  }
  public set draining(value: number) {
    this._draining = value;
  }
  public resetDraining() {
    this._draining = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drainingInput() {
    return this._draining;
  }

  // idle - computed: false, optional: true, required: false
  private _idle?: number; 
  public get idle() {
    return this.getNumberAttribute('idle');
  }
  public set idle(value: number) {
    this._idle = value;
  }
  public resetIdle() {
    this._idle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleInput() {
    return this._idle;
  }
}
export interface MultaiBalancerTags {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/multai_balancer#key MultaiBalancer#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/multai_balancer#value MultaiBalancer#value}
  */
  readonly value: string;
}

export function multaiBalancerTagsToTerraform(struct?: MultaiBalancerTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/spotinst/r/multai_balancer spotinst_multai_balancer}
*/
export class MultaiBalancer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "spotinst_multai_balancer";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/spotinst/r/multai_balancer spotinst_multai_balancer} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MultaiBalancerConfig
  */
  public constructor(scope: Construct, id: string, config: MultaiBalancerConfig) {
    super(scope, id, {
      terraformResourceType: 'spotinst_multai_balancer',
      terraformGeneratorMetadata: {
        providerName: 'spotinst',
        providerVersion: '1.73.3',
        providerVersionConstraint: '~> 1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._dnsCnameAliases = config.dnsCnameAliases;
    this._name = config.name;
    this._scheme = config.scheme;
    this._connectionTimeouts.internalValue = config.connectionTimeouts;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dns_cname_aliases - computed: false, optional: true, required: false
  private _dnsCnameAliases?: string[]; 
  public get dnsCnameAliases() {
    return this.getListAttribute('dns_cname_aliases');
  }
  public set dnsCnameAliases(value: string[]) {
    this._dnsCnameAliases = value;
  }
  public resetDnsCnameAliases() {
    this._dnsCnameAliases = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsCnameAliasesInput() {
    return this._dnsCnameAliases;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // scheme - computed: false, optional: true, required: false
  private _scheme?: string; 
  public get scheme() {
    return this.getStringAttribute('scheme');
  }
  public set scheme(value: string) {
    this._scheme = value;
  }
  public resetScheme() {
    this._scheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemeInput() {
    return this._scheme;
  }

  // connection_timeouts - computed: false, optional: true, required: false
  private _connectionTimeouts = new MultaiBalancerConnectionTimeoutsOutputReference(this, "connection_timeouts");
  public get connectionTimeouts() {
    return this._connectionTimeouts;
  }
  public putConnectionTimeouts(value: MultaiBalancerConnectionTimeouts) {
    this._connectionTimeouts.internalValue = value;
  }
  public resetConnectionTimeouts() {
    this._connectionTimeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionTimeoutsInput() {
    return this._connectionTimeouts.internalValue;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: MultaiBalancerTags[] | cdktf.IResolvable; 
  public get tags() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('tags')));
  }
  public set tags(value: MultaiBalancerTags[] | cdktf.IResolvable) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dns_cname_aliases: cdktf.listMapper(cdktf.stringToTerraform)(this._dnsCnameAliases),
      name: cdktf.stringToTerraform(this._name),
      scheme: cdktf.stringToTerraform(this._scheme),
      connection_timeouts: multaiBalancerConnectionTimeoutsToTerraform(this._connectionTimeouts.internalValue),
      tags: cdktf.listMapper(multaiBalancerTagsToTerraform)(this._tags),
    };
  }
}
