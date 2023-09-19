package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowUp48: ImageVector
  get() {
    if (_arrowUp48 != null) {
      return _arrowUp48!!
    }
    _arrowUp48 = fluentIcon(name = "Filled.ArrowUp48", 48f) {
      materialPath {
          moveTo(24.0F, 44.25F)
          curveToRelative(-0.828F, 0.0F, -1.5F, -0.672F, -1.5F, -1.5F)
          verticalLineTo(10.915F)
          lineTo(10.32F, 23.302F)
          curveToRelative(-0.581F, 0.59F, -1.531F, 0.598F, -2.122F, 0.018F)
          curveToRelative(-0.59F, -0.581F, -0.598F, -1.531F, -0.018F, -2.122F)
          lineTo(22.928F, 6.201F)
          lineToRelative(0.009F, -0.009F)
          lineToRelative(0.011F, -0.011F)
          curveToRelative(0.514F, -0.506F, 1.3F, -0.566F, 1.879F, -0.183F)
          curveToRelative(0.055F, 0.036F, 0.108F, 0.077F, 0.158F, 0.121F)
          curveToRelative(0.023F, 0.02F, 0.045F, 0.04F, 0.067F, 0.062F)
          lineToRelative(0.005F, 0.005F)
          lineToRelative(0.037F, 0.037F)
          lineToRelative(14.725F, 14.975F)
          curveToRelative(0.581F, 0.591F, 0.573F, 1.54F, -0.017F, 2.122F)
          curveToRelative(-0.591F, 0.58F, -1.54F, 0.572F, -2.121F, -0.018F)
          lineTo(25.5F, 10.915F)
          verticalLineTo(42.75F)
          curveToRelative(0.0F, 0.828F, -0.672F, 1.5F, -1.5F, 1.5F)
          close()        
      }
    }
    return _arrowUp48!!
  }

private var _arrowUp48: ImageVector? = null
