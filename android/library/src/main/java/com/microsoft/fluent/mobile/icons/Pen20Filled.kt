package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Pen20: ImageVector
  get() {
    if (_pen20 != null) {
      return _pen20!!
    }
    _pen20 = fluentIcon(name = "Filled.Pen20", 20f) {
      materialPath {
          moveTo(12.92F, 2.873F)
          curveToRelative(1.183F, -1.182F, 3.107F, -1.158F, 4.26F, 0.054F)
          curveToRelative(1.111F, 1.17F, 1.088F, 3.012F, -0.053F, 4.153F)
          lineToRelative(-0.67F, 0.67F)
          lineToRelative(0.336F, 0.336F)
          curveToRelative(0.78F, 0.78F, 0.78F, 2.047F, 0.0F, 2.828F)
          lineToRelative(-0.94F, 0.94F)
          curveToRelative(-0.195F, 0.195F, -0.511F, 0.195F, -0.707F, 0.0F)
          curveToRelative(-0.195F, -0.196F, -0.195F, -0.512F, 0.0F, -0.708F)
          lineToRelative(0.94F, -0.939F)
          curveToRelative(0.39F, -0.39F, 0.39F, -1.024F, 0.0F, -1.414F)
          lineTo(15.75F, 8.457F)
          lineToRelative(-7.98F, 7.981F)
          curveToRelative(-0.34F, 0.339F, -0.768F, 0.574F, -1.235F, 0.678F)
          lineToRelative(-3.926F, 0.873F)
          curveToRelative(-0.167F, 0.037F, -0.342F, -0.014F, -0.462F, -0.135F)
          curveToRelative(-0.121F, -0.12F, -0.172F, -0.295F, -0.135F, -0.462F)
          lineToRelative(0.877F, -3.95F)
          curveToRelative(0.101F, -0.452F, 0.329F, -0.867F, 0.656F, -1.194F)
          lineToRelative(9.375F, -9.375F)
          close()        
      }
    }
    return _pen20!!
  }

private var _pen20: ImageVector? = null
