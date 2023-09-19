package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.DoorTag24: ImageVector
  get() {
    if (_doorTag24 != null) {
      return _doorTag24!!
    }
    _doorTag24 = fluentIcon(name = "Filled.DoorTag24", 24f) {
      materialPath {
          moveTo(12.0F, 6.5F)
          curveToRelative(-0.49F, 0.0F, -0.924F, 0.232F, -1.201F, 0.601F)
          curveToRelative(-0.747F, 0.994F, -2.157F, 1.194F, -3.15F, 0.447F)
          curveTo(6.655F, 6.803F, 6.455F, 5.393F, 7.2F, 4.399F)
          curveTo(8.292F, 2.946F, 10.036F, 2.0F, 12.0F, 2.0F)
          curveToRelative(3.314F, 0.0F, 6.0F, 2.686F, 6.0F, 6.0F)
          verticalLineToRelative(12.0F)
          curveToRelative(0.0F, 1.105F, -0.895F, 2.0F, -2.0F, 2.0F)
          horizontalLineTo(8.0F)
          curveToRelative(-1.105F, 0.0F, -2.0F, -0.895F, -2.0F, -2.0F)
          verticalLineToRelative(-8.5F)
          curveToRelative(0.0F, -1.105F, 0.895F, -2.0F, 2.0F, -2.0F)
          horizontalLineToRelative(4.0F)
          curveToRelative(0.828F, 0.0F, 1.5F, -0.672F, 1.5F, -1.5F)
          reflectiveCurveTo(12.828F, 6.5F, 12.0F, 6.5F)
          close()
          moveToRelative(-2.25F, 11.0F)
          curveTo(9.336F, 17.5F, 9.0F, 17.836F, 9.0F, 18.25F)
          reflectiveCurveTo(9.336F, 19.0F, 9.75F, 19.0F)
          horizontalLineToRelative(4.5F)
          curveToRelative(0.414F, 0.0F, 0.75F, -0.336F, 0.75F, -0.75F)
          reflectiveCurveToRelative(-0.336F, -0.75F, -0.75F, -0.75F)
          horizontalLineToRelative(-4.5F)
          close()        
      }
    }
    return _doorTag24!!
  }

private var _doorTag24: ImageVector? = null
