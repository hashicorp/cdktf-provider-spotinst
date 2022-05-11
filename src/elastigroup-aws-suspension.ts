// https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws_suspension
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ElastigroupAwsSuspensionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws_suspension#group_id ElastigroupAwsSuspension#group_id}
  */
  readonly groupId: string;
  /**
  * suspension block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws_suspension#suspension ElastigroupAwsSuspension#suspension}
  */
  readonly suspension: ElastigroupAwsSuspensionSuspension[] | cdktf.IResolvable;
}
export interface ElastigroupAwsSuspensionSuspension {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws_suspension#name ElastigroupAwsSuspension#name}
  */
  readonly name: string;
}

export function elastigroupAwsSuspensionSuspensionToTerraform(struct?: ElastigroupAwsSuspensionSuspension | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws_suspension spotinst_elastigroup_aws_suspension}
*/
export class ElastigroupAwsSuspension extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "spotinst_elastigroup_aws_suspension";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws_suspension spotinst_elastigroup_aws_suspension} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ElastigroupAwsSuspensionConfig
  */
  public constructor(scope: Construct, id: string, config: ElastigroupAwsSuspensionConfig) {
    super(scope, id, {
      terraformResourceType: 'spotinst_elastigroup_aws_suspension',
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
    this._groupId = config.groupId;
    this._suspension = config.suspension;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // group_id - computed: false, optional: false, required: true
  private _groupId?: string; 
  public get groupId() {
    return this.getStringAttribute('group_id');
  }
  public set groupId(value: string) {
    this._groupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // suspension - computed: false, optional: false, required: true
  private _suspension?: ElastigroupAwsSuspensionSuspension[] | cdktf.IResolvable; 
  public get suspension() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('suspension');
  }
  public set suspension(value: ElastigroupAwsSuspensionSuspension[] | cdktf.IResolvable) {
    this._suspension = value;
  }
  // Temporarily expose input value. Use with caution.
  public get suspensionInput() {
    return this._suspension;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      group_id: cdktf.stringToTerraform(this._groupId),
      suspension: cdktf.listMapper(elastigroupAwsSuspensionSuspensionToTerraform)(this._suspension),
    };
  }
}
