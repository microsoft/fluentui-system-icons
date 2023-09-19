package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.PeopleCheckmark16: ImageVector
  get() {
    if (_peopleCheckmark16 != null) {
      return _peopleCheckmark16!!
    }
    _peopleCheckmark16 = fluentIcon(name = "Filled.PeopleCheckmark16", 16f) {
      materialPath {
          moveTo(8.0F, 4.5F)
          curveTo(8.0F, 5.88F, 6.88F, 7.0F, 5.5F, 7.0F)
          reflectiveCurveTo(3.0F, 5.88F, 3.0F, 4.5F)
          reflectiveCurveTo(4.12F, 2.0F, 5.5F, 2.0F)
          reflectiveCurveTo(8.0F, 3.12F, 8.0F, 4.5F)
          close()
          moveTo(11.5F, 6.0F)
          curveToRelative(-0.548F, 0.0F, -1.078F, 0.08F, -1.578F, 0.23F)
          curveTo(9.659F, 5.89F, 9.5F, 5.464F, 9.5F, 5.0F)
          curveToRelative(0.0F, -1.105F, 0.895F, -2.0F, 2.0F, -2.0F)
          reflectiveCurveToRelative(2.0F, 0.895F, 2.0F, 2.0F)
          curveToRelative(0.0F, 0.464F, -0.158F, 0.89F, -0.422F, 1.23F)
          curveTo(12.578F, 6.08F, 12.048F, 6.0F, 11.5F, 6.0F)
          close()
          moveTo(3.0F, 8.0F)
          horizontalLineToRelative(4.257F)
          curveTo(6.472F, 8.95F, 6.0F, 10.17F, 6.0F, 11.5F)
          curveToRelative(0.0F, 0.334F, 0.03F, 0.66F, 0.087F, 0.977F)
          curveTo(5.9F, 12.492F, 5.706F, 12.5F, 5.5F, 12.5F)
          curveToRelative(-4.0F, 0.0F, -4.0F, -2.925F, -4.0F, -2.925F)
          verticalLineTo(9.5F)
          curveTo(1.5F, 8.672F, 2.172F, 8.0F, 3.0F, 8.0F)
          close()
          moveToRelative(13.0F, 3.5F)
          curveToRelative(0.0F, 2.485F, -2.015F, 4.5F, -4.5F, 4.5F)
          reflectiveCurveTo(7.0F, 13.985F, 7.0F, 11.5F)
          reflectiveCurveTo(9.015F, 7.0F, 11.5F, 7.0F)
          reflectiveCurveTo(16.0F, 9.015F, 16.0F, 11.5F)
          close()
          moveToRelative(-2.146F, -1.854F)
          curveToRelative(-0.196F, -0.195F, -0.512F, -0.195F, -0.708F, 0.0F)
          lineTo(10.5F, 12.293F)
          lineToRelative(-0.646F, -0.647F)
          curveToRelative(-0.196F, -0.195F, -0.512F, -0.195F, -0.707F, 0.0F)
          curveToRelative(-0.196F, 0.196F, -0.196F, 0.512F, 0.0F, 0.708F)
          lineToRelative(1.0F, 1.0F)
          curveToRelative(0.195F, 0.195F, 0.511F, 0.195F, 0.707F, 0.0F)
          lineToRelative(3.0F, -3.0F)
          curveToRelative(0.195F, -0.196F, 0.195F, -0.512F, 0.0F, -0.707F)
          close()        
      }
    }
    return _peopleCheckmark16!!
  }

private var _peopleCheckmark16: ImageVector? = null
