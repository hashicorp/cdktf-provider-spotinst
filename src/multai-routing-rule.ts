// https://www.terraform.io/docs/providers/spotinst/r/multai_routing_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MultaiRoutingRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/multai_routing_rule#balancer_id MultaiRoutingRule#balancer_id}
  */
  readonly balancerId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/multai_routing_rule#listener_id MultaiRoutingRule#listener_id}
  */
  readonly listenerId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/multai_routing_rule#middleware_ids MultaiRoutingRule#middleware_ids}
  */
  readonly middlewareIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/multai_routing_rule#priority MultaiRoutingRule#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/multai_routing_rule#route MultaiRoutingRule#route}
  */
  readonly route: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/multai_routing_rule#strategy MultaiRoutingRule#strategy}
  */
  readonly strategy?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/multai_routing_rule#target_set_ids MultaiRoutingRule#target_set_ids}
  */
  readonly targetSetIds: string[];
  /**
  * tags block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/multai_routing_rule#tags MultaiRoutingRule#tags}
  */
  readonly tags?: MultaiRoutingRuleTags[] | cdktf.IResolvable;
}
export interface MultaiRoutingRuleTags {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/multai_routing_rule#key MultaiRoutingRule#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/multai_routing_rule#value MultaiRoutingRule#value}
  */
  readonly value: string;
}

export function multaiRoutingRuleTagsToTerraform(struct?: MultaiRoutingRuleTags | cdktf.IResolvable): any {
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
* Represents a {@link https://www.terraform.io/docs/providers/spotinst/r/multai_routing_rule spotinst_multai_routing_rule}
*/
export class MultaiRoutingRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "spotinst_multai_routing_rule";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/spotinst/r/multai_routing_rule spotinst_multai_routing_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MultaiRoutingRuleConfig
  */
  public constructor(scope: Construct, id: string, config: MultaiRoutingRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'spotinst_multai_routing_rule',
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
    this._balancerId = config.balancerId;
    this._listenerId = config.listenerId;
    this._middlewareIds = config.middlewareIds;
    this._priority = config.priority;
    this._route = config.route;
    this._strategy = config.strategy;
    this._targetSetIds = config.targetSetIds;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // balancer_id - computed: false, optional: false, required: true
  private _balancerId?: string; 
  public get balancerId() {
    return this.getStringAttribute('balancer_id');
  }
  public set balancerId(value: string) {
    this._balancerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get balancerIdInput() {
    return this._balancerId;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // listener_id - computed: false, optional: false, required: true
  private _listenerId?: string; 
  public get listenerId() {
    return this.getStringAttribute('listener_id');
  }
  public set listenerId(value: string) {
    this._listenerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get listenerIdInput() {
    return this._listenerId;
  }

  // middleware_ids - computed: false, optional: true, required: false
  private _middlewareIds?: string[]; 
  public get middlewareIds() {
    return this.getListAttribute('middleware_ids');
  }
  public set middlewareIds(value: string[]) {
    this._middlewareIds = value;
  }
  public resetMiddlewareIds() {
    this._middlewareIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get middlewareIdsInput() {
    return this._middlewareIds;
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // route - computed: false, optional: false, required: true
  private _route?: string; 
  public get route() {
    return this.getStringAttribute('route');
  }
  public set route(value: string) {
    this._route = value;
  }
  // Temporarily expose input value. Use with caution.
  public get routeInput() {
    return this._route;
  }

  // strategy - computed: false, optional: true, required: false
  private _strategy?: string; 
  public get strategy() {
    return this.getStringAttribute('strategy');
  }
  public set strategy(value: string) {
    this._strategy = value;
  }
  public resetStrategy() {
    this._strategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strategyInput() {
    return this._strategy;
  }

  // target_set_ids - computed: false, optional: false, required: true
  private _targetSetIds?: string[]; 
  public get targetSetIds() {
    return this.getListAttribute('target_set_ids');
  }
  public set targetSetIds(value: string[]) {
    this._targetSetIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetSetIdsInput() {
    return this._targetSetIds;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: MultaiRoutingRuleTags[] | cdktf.IResolvable; 
  public get tags() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('tags')));
  }
  public set tags(value: MultaiRoutingRuleTags[] | cdktf.IResolvable) {
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
      balancer_id: cdktf.stringToTerraform(this._balancerId),
      listener_id: cdktf.stringToTerraform(this._listenerId),
      middleware_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._middlewareIds),
      priority: cdktf.numberToTerraform(this._priority),
      route: cdktf.stringToTerraform(this._route),
      strategy: cdktf.stringToTerraform(this._strategy),
      target_set_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._targetSetIds),
      tags: cdktf.listMapper(multaiRoutingRuleTagsToTerraform)(this._tags),
    };
  }
}
