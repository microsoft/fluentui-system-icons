package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowDown48: ImageVector
  get() {
    if (_arrowDown48 != null) {
      return _arrowDown48!!
    }
    _arrowDown48 = fluentIcon(name = "Filled.ArrowDown48", 48f) {
      materialPath {
          moveTo(25.5F, 5.25F)
          curveToRelative(0.0F, -0.828F, -0.672F, -1.5F, -1.5F, -1.5F)
          reflectiveCurveToRelative(-1.5F, 0.672F, -1.5F, 1.5F)
          verticalLineToRelative(31.835F)
          lineTo(10.32F, 24.698F)
          curveToRelative(-0.581F, -0.59F, -1.531F, -0.598F, -2.122F, -0.018F)
          curveToRelative(-0.59F, 0.581F, -0.598F, 1.531F, -0.018F, 2.122F)
          lineToRelative(14.75F, 15.0F)
          lineToRelative(0.031F, 0.03F)
          curveToRelative(0.27F, 0.259F, 0.636F, 0.418F, 1.039F, 0.418F)
          curveToRelative(0.4F, 0.0F, 0.763F, -0.157F, 1.032F, -0.411F)
          lineToRelative(0.038F, -0.037F)
          lineToRelative(14.75F, -15.0F)
          curveToRelative(0.58F, -0.591F, 0.572F, -1.54F, -0.018F, -2.122F)
          curveToRelative(-0.591F, -0.58F, -1.54F, -0.572F, -2.121F, 0.018F)
          lineTo(25.5F, 37.085F)
          verticalLineTo(5.25F)
          close()        
      }
    }
    return _arrowDown48!!
  }

private var _arrowDown48: ImageVector? = null
