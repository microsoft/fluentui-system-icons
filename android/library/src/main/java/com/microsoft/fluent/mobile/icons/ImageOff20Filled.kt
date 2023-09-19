package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ImageOff20: ImageVector
  get() {
    if (_imageOff20 != null) {
      return _imageOff20!!
    }
    _imageOff20 = fluentIcon(name = "Filled.ImageOff20", 20f) {
      materialPath {
          moveTo(2.853F, 2.147F)
          curveToRelative(-0.195F, -0.196F, -0.511F, -0.196F, -0.707F, 0.0F)
          curveToRelative(-0.195F, 0.195F, -0.195F, 0.511F, 0.0F, 0.707F)
          lineToRelative(1.409F, 1.408F)
          curveTo(3.205F, 4.752F, 3.0F, 5.352F, 3.0F, 6.0F)
          verticalLineToRelative(8.0F)
          curveToRelative(0.0F, 0.648F, 0.205F, 1.248F, 0.555F, 1.738F)
          lineToRelative(5.385F, -5.385F)
          curveToRelative(0.124F, -0.124F, 0.264F, -0.221F, 0.413F, -0.293F)
          lineToRelative(0.982F, 0.982F)
          curveToRelative(-0.197F, -0.177F, -0.5F, -0.17F, -0.688F, 0.018F)
          lineToRelative(-5.385F, 5.385F)
          curveTo(4.752F, 16.795F, 5.352F, 17.0F, 6.0F, 17.0F)
          horizontalLineToRelative(8.0F)
          curveToRelative(0.648F, 0.0F, 1.248F, -0.205F, 1.738F, -0.555F)
          lineToRelative(1.408F, 1.409F)
          curveToRelative(0.196F, 0.195F, 0.512F, 0.195F, 0.708F, 0.0F)
          curveToRelative(0.195F, -0.196F, 0.195F, -0.512F, 0.0F, -0.708F)
          lineToRelative(-15.0F, -15.0F)
          close()
          moveTo(17.0F, 14.0F)
          curveToRelative(0.0F, 0.269F, -0.035F, 0.53F, -0.102F, 0.777F)
          lineTo(5.223F, 3.102F)
          curveTo(5.47F, 3.035F, 5.73F, 3.0F, 6.0F, 3.0F)
          horizontalLineToRelative(8.0F)
          curveToRelative(1.657F, 0.0F, 3.0F, 1.343F, 3.0F, 3.0F)
          verticalLineToRelative(8.0F)
          close()
          moveToRelative(-2.5F, -7.25F)
          curveToRelative(0.0F, -0.69F, -0.56F, -1.25F, -1.25F, -1.25F)
          reflectiveCurveTo(12.0F, 6.06F, 12.0F, 6.75F)
          reflectiveCurveTo(12.56F, 8.0F, 13.25F, 8.0F)
          reflectiveCurveToRelative(1.25F, -0.56F, 1.25F, -1.25F)
          close()        
      }
    }
    return _imageOff20!!
  }

private var _imageOff20: ImageVector? = null
