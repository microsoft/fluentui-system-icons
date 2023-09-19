package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Database20: ImageVector
  get() {
    if (_database20 != null) {
      return _database20!!
    }
    _database20 = fluentIcon(name = "Filled.Database20", 20f) {
      materialPath {
          moveTo(10.0F, 8.0F)
          curveToRelative(3.314F, 0.0F, 6.0F, -1.343F, 6.0F, -3.0F)
          reflectiveCurveToRelative(-2.686F, -3.0F, -6.0F, -3.0F)
          reflectiveCurveToRelative(-6.0F, 1.343F, -6.0F, 3.0F)
          reflectiveCurveToRelative(2.686F, 3.0F, 6.0F, 3.0F)
          close()
          moveToRelative(4.69F, 0.016F)
          curveTo(15.16F, 7.78F, 15.617F, 7.482F, 16.0F, 7.12F)
          verticalLineTo(15.0F)
          curveToRelative(0.0F, 1.657F, -2.686F, 3.0F, -6.0F, 3.0F)
          reflectiveCurveToRelative(-6.0F, -1.343F, -6.0F, -3.0F)
          verticalLineTo(7.12F)
          curveToRelative(0.383F, 0.362F, 0.84F, 0.661F, 1.31F, 0.896F)
          curveTo(6.562F, 8.642F, 8.222F, 9.0F, 10.0F, 9.0F)
          curveToRelative(1.778F, 0.0F, 3.438F, -0.358F, 4.69F, -0.984F)
          close()        
      }
    }
    return _database20!!
  }

private var _database20: ImageVector? = null
