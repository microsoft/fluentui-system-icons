package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Comma20: ImageVector
  get() {
    if (_comma20 != null) {
      return _comma20!!
    }
    _comma20 = fluentIcon(name = "Filled.Comma20", 20f) {
      materialPath {
          moveTo(13.5F, 7.5F)
          curveTo(13.5F, 5.567F, 11.933F, 4.0F, 10.0F, 4.0F)
          reflectiveCurveTo(6.5F, 5.567F, 6.5F, 7.5F)
          reflectiveCurveTo(8.067F, 11.0F, 10.0F, 11.0F)
          curveToRelative(0.586F, 0.0F, 1.138F, -0.144F, 1.624F, -0.399F)
          curveToRelative(-0.234F, 0.868F, -0.564F, 1.595F, -0.959F, 2.175F)
          curveTo(9.875F, 13.938F, 8.84F, 14.5F, 7.75F, 14.5F)
          curveTo(7.336F, 14.5F, 7.0F, 14.836F, 7.0F, 15.25F)
          reflectiveCurveTo(7.336F, 16.0F, 7.75F, 16.0F)
          curveToRelative(1.671F, 0.0F, 3.137F, -0.883F, 4.156F, -2.38F)
          curveToRelative(1.01F, -1.486F, 1.594F, -3.583F, 1.594F, -6.12F)
          close()        
      }
    }
    return _comma20!!
  }

private var _comma20: ImageVector? = null
