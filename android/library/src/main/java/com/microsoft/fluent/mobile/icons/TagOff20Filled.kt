package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.TagOff20: ImageVector
  get() {
    if (_tagOff20 != null) {
      return _tagOff20!!
    }
    _tagOff20 = fluentIcon(name = "Filled.TagOff20", 20f) {
      materialPath {
          moveTo(2.853F, 2.147F)
          curveToRelative(-0.195F, -0.196F, -0.511F, -0.196F, -0.707F, 0.0F)
          curveToRelative(-0.195F, 0.195F, -0.195F, 0.511F, 0.0F, 0.707F)
          lineToRelative(3.642F, 3.64F)
          lineToRelative(-2.766F, 2.76F)
          curveToRelative(-0.783F, 0.78F, -0.783F, 2.048F, -0.002F, 2.83F)
          lineToRelative(4.949F, 4.948F)
          curveToRelative(0.78F, 0.781F, 2.047F, 0.781F, 2.828F, 0.0F)
          lineToRelative(2.764F, -2.764F)
          lineToRelative(3.585F, 3.586F)
          curveToRelative(0.196F, 0.195F, 0.512F, 0.195F, 0.708F, 0.0F)
          curveToRelative(0.195F, -0.196F, 0.195F, -0.512F, 0.0F, -0.708F)
          lineToRelative(-15.0F, -15.0F)
          close()
          moveTo(17.428F, 10.4F)
          lineToRelative(-2.453F, 2.453F)
          lineToRelative(-7.771F, -7.771F)
          lineToRelative(2.5F, -2.494F)
          curveTo(10.082F, 2.212F, 10.595F, 2.0F, 11.129F, 2.005F)
          lineToRelative(4.89F, 0.032F)
          curveToRelative(1.099F, 0.007F, 1.986F, 0.899F, 1.988F, 1.997F)
          lineToRelative(0.007F, 4.95F)
          curveToRelative(0.0F, 0.531F, -0.21F, 1.041F, -0.586F, 1.417F)
          close()
          moveTo(14.0F, 7.001F)
          curveToRelative(0.552F, 0.0F, 1.0F, -0.448F, 1.0F, -1.0F)
          curveToRelative(0.0F, -0.553F, -0.448F, -1.0F, -1.0F, -1.0F)
          reflectiveCurveToRelative(-1.0F, 0.447F, -1.0F, 1.0F)
          curveToRelative(0.0F, 0.552F, 0.448F, 1.0F, 1.0F, 1.0F)
          close()        
      }
    }
    return _tagOff20!!
  }

private var _tagOff20: ImageVector? = null
