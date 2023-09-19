package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.PeopleCheckmark20: ImageVector
  get() {
    if (_peopleCheckmark20 != null) {
      return _peopleCheckmark20!!
    }
    _peopleCheckmark20 = fluentIcon(name = "Filled.PeopleCheckmark20", 20f) {
      materialPath {
          moveTo(6.75F, 9.0F)
          curveTo(8.545F, 9.0F, 10.0F, 7.545F, 10.0F, 5.75F)
          reflectiveCurveTo(8.545F, 2.5F, 6.75F, 2.5F)
          reflectiveCurveTo(3.5F, 3.955F, 3.5F, 5.75F)
          reflectiveCurveTo(4.955F, 9.0F, 6.75F, 9.0F)
          close()
          moveTo(17.0F, 6.5F)
          curveTo(17.0F, 7.88F, 15.88F, 9.0F, 14.5F, 9.0F)
          reflectiveCurveTo(12.0F, 7.88F, 12.0F, 6.5F)
          reflectiveCurveTo(13.12F, 4.0F, 14.5F, 4.0F)
          reflectiveCurveTo(17.0F, 5.12F, 17.0F, 6.5F)
          close()
          moveToRelative(-8.0F, 8.0F)
          curveToRelative(0.0F, -1.704F, 0.775F, -3.228F, 1.993F, -4.237F)
          curveTo(10.7F, 10.096F, 10.36F, 10.0F, 10.0F, 10.0F)
          horizontalLineTo(3.5F)
          curveToRelative(-1.105F, 0.0F, -2.0F, 0.895F, -2.0F, 2.0F)
          curveToRelative(0.0F, 0.0F, 0.0F, 4.0F, 5.25F, 4.0F)
          curveToRelative(0.953F, 0.0F, 1.733F, -0.132F, 2.371F, -0.347F)
          curveTo(9.041F, 15.28F, 9.0F, 14.895F, 9.0F, 14.5F)
          close()
          moveToRelative(10.0F, 0.0F)
          curveToRelative(0.0F, 2.485F, -2.015F, 4.5F, -4.5F, 4.5F)
          reflectiveCurveTo(10.0F, 16.985F, 10.0F, 14.5F)
          reflectiveCurveToRelative(2.015F, -4.5F, 4.5F, -4.5F)
          reflectiveCurveToRelative(4.5F, 2.015F, 4.5F, 4.5F)
          close()
          moveToRelative(-2.146F, -1.854F)
          curveToRelative(-0.196F, -0.195F, -0.512F, -0.195F, -0.708F, 0.0F)
          lineTo(13.5F, 15.293F)
          lineToRelative(-0.646F, -0.647F)
          curveToRelative(-0.196F, -0.195F, -0.512F, -0.195F, -0.708F, 0.0F)
          curveToRelative(-0.195F, 0.196F, -0.195F, 0.512F, 0.0F, 0.708F)
          lineToRelative(1.0F, 1.0F)
          curveToRelative(0.196F, 0.195F, 0.512F, 0.195F, 0.708F, 0.0F)
          lineToRelative(3.0F, -3.0F)
          curveToRelative(0.195F, -0.196F, 0.195F, -0.512F, 0.0F, -0.708F)
          close()        
      }
    }
    return _peopleCheckmark20!!
  }

private var _peopleCheckmark20: ImageVector? = null
