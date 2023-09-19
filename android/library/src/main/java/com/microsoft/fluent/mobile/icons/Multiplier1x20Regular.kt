package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Multiplier1x20: ImageVector
  get() {
    if (_multiplier1x20 != null) {
      return _multiplier1x20!!
    }
    _multiplier1x20 = fluentIcon(name = "Regular.Multiplier1x20", 120f) {
      materialPath {
          moveTo(8.0F, 6.5F)
          curveToRelative(0.0F, -0.215F, -0.137F, -0.405F, -0.34F, -0.474F)
          curveToRelative(-0.204F, -0.068F, -0.428F, 0.0F, -0.558F, 0.172F)
          curveToRelative(-0.075F, 0.098F, -0.147F, 0.2F, -0.22F, 0.306F)
          curveToRelative(-0.33F, 0.472F, -0.702F, 1.005F, -1.64F, 1.567F)
          curveToRelative(-0.236F, 0.142F, -0.313F, 0.45F, -0.17F, 0.686F)
          curveToRelative(0.14F, 0.237F, 0.448F, 0.314F, 0.684F, 0.173F)
          curveTo(6.302F, 8.602F, 6.698F, 8.269F, 7.0F, 7.957F)
          verticalLineTo(13.5F)
          curveTo(7.0F, 13.776F, 7.224F, 14.0F, 7.5F, 14.0F)
          reflectiveCurveTo(8.0F, 13.776F, 8.0F, 13.5F)
          verticalLineToRelative(-7.0F)
          close()
          moveToRelative(2.854F, 3.646F)
          curveToRelative(-0.196F, -0.195F, -0.512F, -0.195F, -0.708F, 0.0F)
          curveToRelative(-0.195F, 0.196F, -0.195F, 0.512F, 0.0F, 0.707F)
          lineTo(11.293F, 12.0F)
          lineToRelative(-1.147F, 1.146F)
          curveToRelative(-0.195F, 0.195F, -0.195F, 0.512F, 0.0F, 0.707F)
          curveToRelative(0.196F, 0.196F, 0.512F, 0.196F, 0.708F, 0.0F)
          lineTo(12.0F, 12.707F)
          lineToRelative(1.146F, 1.146F)
          curveToRelative(0.196F, 0.196F, 0.512F, 0.196F, 0.708F, 0.0F)
          curveToRelative(0.195F, -0.195F, 0.195F, -0.512F, 0.0F, -0.707F)
          lineTo(12.707F, 12.0F)
          lineToRelative(1.147F, -1.147F)
          curveToRelative(0.195F, -0.195F, 0.195F, -0.511F, 0.0F, -0.707F)
          curveToRelative(-0.196F, -0.195F, -0.512F, -0.195F, -0.708F, 0.0F)
          lineTo(12.0F, 11.293F)
          lineToRelative(-1.146F, -1.147F)
          close()        
      }
    }
    return _multiplier1x20!!
  }

private var _multiplier1x20: ImageVector? = null
