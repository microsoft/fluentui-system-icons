package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.DocumentCheckmark16: ImageVector
  get() {
    if (_documentCheckmark16 != null) {
      return _documentCheckmark16!!
    }
    _documentCheckmark16 = fluentIcon(name = "Filled.DocumentCheckmark16", 16f) {
      materialPath {
          moveTo(9.0F, 1.0F)
          verticalLineToRelative(3.5F)
          curveTo(9.0F, 5.328F, 9.672F, 6.0F, 10.5F, 6.0F)
          horizontalLineTo(14.0F)
          verticalLineToRelative(7.5F)
          curveToRelative(0.0F, 0.828F, -0.672F, 1.5F, -1.5F, 1.5F)
          horizontalLineTo(8.663F)
          curveTo(10.077F, 14.005F, 11.0F, 12.36F, 11.0F, 10.5F)
          curveTo(11.0F, 7.462F, 8.538F, 5.0F, 5.5F, 5.0F)
          curveTo(4.98F, 5.0F, 4.477F, 5.072F, 4.0F, 5.207F)
          verticalLineTo(2.5F)
          curveTo(4.0F, 1.672F, 4.672F, 1.0F, 5.5F, 1.0F)
          horizontalLineTo(9.0F)
          close()
          moveToRelative(1.0F, 0.25F)
          verticalLineTo(4.5F)
          curveTo(10.0F, 4.776F, 10.224F, 5.0F, 10.5F, 5.0F)
          horizontalLineToRelative(3.25F)
          lineTo(10.0F, 1.25F)
          close()
          moveToRelative(0.0F, 9.25F)
          curveToRelative(0.0F, 2.485F, -2.015F, 4.5F, -4.5F, 4.5F)
          reflectiveCurveTo(1.0F, 12.985F, 1.0F, 10.5F)
          reflectiveCurveTo(3.015F, 6.0F, 5.5F, 6.0F)
          reflectiveCurveTo(10.0F, 8.015F, 10.0F, 10.5F)
          close()
          moveTo(7.854F, 8.646F)
          curveToRelative(-0.196F, -0.195F, -0.512F, -0.195F, -0.708F, 0.0F)
          lineTo(4.5F, 11.293F)
          lineToRelative(-0.647F, -0.647F)
          curveToRelative(-0.195F, -0.195F, -0.511F, -0.195F, -0.707F, 0.0F)
          curveToRelative(-0.195F, 0.196F, -0.195F, 0.512F, 0.0F, 0.708F)
          lineToRelative(1.0F, 1.0F)
          curveToRelative(0.196F, 0.195F, 0.512F, 0.195F, 0.708F, 0.0F)
          lineToRelative(3.0F, -3.0F)
          curveToRelative(0.195F, -0.196F, 0.195F, -0.512F, 0.0F, -0.707F)
          close()        
      }
    }
    return _documentCheckmark16!!
  }

private var _documentCheckmark16: ImageVector? = null
