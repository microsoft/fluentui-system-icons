package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.PhoneDismiss20: ImageVector
  get() {
    if (_phoneDismiss20 != null) {
      return _phoneDismiss20!!
    }
    _phoneDismiss20 = fluentIcon(name = "Filled.PhoneDismiss20", 20f) {
      materialPath {
          moveTo(5.5F, 2.0F)
          curveTo(4.672F, 2.0F, 4.0F, 2.672F, 4.0F, 3.5F)
          verticalLineToRelative(13.0F)
          curveTo(4.0F, 17.328F, 4.672F, 18.0F, 5.5F, 18.0F)
          horizontalLineToRelative(4.757F)
          curveToRelative(-0.686F, -0.83F, -1.132F, -1.866F, -1.235F, -3.0F)
          horizontalLineTo(7.5F)
          curveTo(7.224F, 15.0F, 7.0F, 14.776F, 7.0F, 14.5F)
          reflectiveCurveTo(7.224F, 14.0F, 7.5F, 14.0F)
          horizontalLineToRelative(1.522F)
          curveTo(9.26F, 11.361F, 11.362F, 9.26F, 14.0F, 9.022F)
          verticalLineTo(3.5F)
          curveTo(14.0F, 2.672F, 13.328F, 2.0F, 12.5F, 2.0F)
          horizontalLineToRelative(-7.0F)
          close()
          moveToRelative(9.0F, 17.0F)
          curveToRelative(2.485F, 0.0F, 4.5F, -2.015F, 4.5F, -4.5F)
          reflectiveCurveTo(16.985F, 10.0F, 14.5F, 10.0F)
          reflectiveCurveTo(10.0F, 12.015F, 10.0F, 14.5F)
          reflectiveCurveToRelative(2.015F, 4.5F, 4.5F, 4.5F)
          close()
          moveToRelative(1.854F, -6.354F)
          curveToRelative(0.195F, 0.196F, 0.195F, 0.512F, 0.0F, 0.708F)
          lineTo(15.207F, 14.5F)
          lineToRelative(1.147F, 1.146F)
          curveToRelative(0.195F, 0.196F, 0.195F, 0.512F, 0.0F, 0.708F)
          curveToRelative(-0.196F, 0.195F, -0.512F, 0.195F, -0.708F, 0.0F)
          lineTo(14.5F, 15.207F)
          lineToRelative(-1.146F, 1.147F)
          curveToRelative(-0.196F, 0.195F, -0.512F, 0.195F, -0.708F, 0.0F)
          curveToRelative(-0.195F, -0.196F, -0.195F, -0.512F, 0.0F, -0.708F)
          lineToRelative(1.147F, -1.146F)
          lineToRelative(-1.147F, -1.146F)
          curveToRelative(-0.195F, -0.196F, -0.195F, -0.512F, 0.0F, -0.708F)
          curveToRelative(0.196F, -0.195F, 0.512F, -0.195F, 0.708F, 0.0F)
          lineToRelative(1.146F, 1.147F)
          lineToRelative(1.146F, -1.147F)
          curveToRelative(0.196F, -0.195F, 0.512F, -0.195F, 0.708F, 0.0F)
          close()        
      }
    }
    return _phoneDismiss20!!
  }

private var _phoneDismiss20: ImageVector? = null
