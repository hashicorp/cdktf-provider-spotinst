// https://www.terraform.io/docs/providers/spotinst/r/ocean_aws_extended_resource_definition
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OceanAwsExtendedResourceDefinitionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws_extended_resource_definition#name OceanAwsExtendedResourceDefinition#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws_extended_resource_definition#resource_mapping OceanAwsExtendedResourceDefinition#resource_mapping}
  */
  readonly resourceMapping: { [key: string]: string };
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws_extended_resource_definition spotinst_ocean_aws_extended_resource_definition}
*/
export class OceanAwsExtendedResourceDefinition extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "spotinst_ocean_aws_extended_resource_definition";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws_extended_resource_definition spotinst_ocean_aws_extended_resource_definition} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OceanAwsExtendedResourceDefinitionConfig
  */
  public constructor(scope: Construct, id: string, config: OceanAwsExtendedResourceDefinitionConfig) {
    super(scope, id, {
      terraformResourceType: 'spotinst_ocean_aws_extended_resource_definition',
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
    this._name = config.name;
    this._resourceMapping = config.resourceMapping;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // resource_mapping - computed: false, optional: false, required: true
  private _resourceMapping?: { [key: string]: string }; 
  public get resourceMapping() {
    return this.getStringMapAttribute('resource_mapping');
  }
  public set resourceMapping(value: { [key: string]: string }) {
    this._resourceMapping = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceMappingInput() {
    return this._resourceMapping;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      resource_mapping: cdktf.hashMapper(cdktf.stringToTerraform)(this._resourceMapping),
    };
  }
}
