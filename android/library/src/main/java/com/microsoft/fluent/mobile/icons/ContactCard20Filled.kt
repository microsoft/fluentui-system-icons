package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ContactCard20: ImageVector
  get() {
    if (_contactCard20 != null) {
      return _contactCard20!!
    }
    _contactCard20 = fluentIcon(name = "Filled.ContactCard20", 20f) {
      materialPath {
          moveTo(3.5F, 4.0F)
          curveTo(2.672F, 4.0F, 2.0F, 4.672F, 2.0F, 5.5F)
          verticalLineToRelative(9.0F)
          curveTo(2.0F, 15.328F, 2.672F, 16.0F, 3.5F, 16.0F)
          horizontalLineToRelative(13.0F)
          curveToRelative(0.828F, 0.0F, 1.5F, -0.672F, 1.5F, -1.5F)
          verticalLineToRelative(-9.0F)
          curveTo(18.0F, 4.672F, 17.328F, 4.0F, 16.5F, 4.0F)
          horizontalLineToRelative(-13.0F)
          close()
          moveToRelative(3.0F, 6.0F)
          curveTo(5.672F, 10.0F, 5.0F, 9.328F, 5.0F, 8.5F)
          reflectiveCurveTo(5.672F, 7.0F, 6.5F, 7.0F)
          reflectiveCurveTo(8.0F, 7.672F, 8.0F, 8.5F)
          reflectiveCurveTo(7.328F, 10.0F, 6.5F, 10.0F)
          close()
          moveToRelative(-1.551F, 0.75F)
          horizontalLineTo(8.05F)
          curveToRelative(0.525F, 0.0F, 0.95F, 0.425F, 0.95F, 0.949F)
          curveToRelative(0.0F, 0.847F, -0.577F, 1.585F, -1.399F, 1.791F)
          lineToRelative(-0.059F, 0.015F)
          curveToRelative(-0.684F, 0.17F, -1.4F, 0.17F, -2.084F, 0.0F)
          lineToRelative(-0.06F, -0.015F)
          curveTo(4.578F, 13.284F, 4.0F, 12.546F, 4.0F, 11.699F)
          curveToRelative(0.0F, -0.524F, 0.425F, -0.949F, 0.949F, -0.949F)
          close()
          moveTo(11.0F, 8.5F)
          curveTo(11.0F, 8.224F, 11.224F, 8.0F, 11.5F, 8.0F)
          horizontalLineToRelative(3.0F)
          curveTo(14.776F, 8.0F, 15.0F, 8.224F, 15.0F, 8.5F)
          reflectiveCurveTo(14.776F, 9.0F, 14.5F, 9.0F)
          horizontalLineToRelative(-3.0F)
          curveTo(11.224F, 9.0F, 11.0F, 8.776F, 11.0F, 8.5F)
          close()
          moveToRelative(0.5F, 2.5F)
          horizontalLineToRelative(3.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, 0.224F, 0.5F, 0.5F)
          reflectiveCurveTo(14.776F, 12.0F, 14.5F, 12.0F)
          horizontalLineToRelative(-3.0F)
          curveToRelative(-0.276F, 0.0F, -0.5F, -0.224F, -0.5F, -0.5F)
          reflectiveCurveToRelative(0.224F, -0.5F, 0.5F, -0.5F)
          close()        
      }
    }
    return _contactCard20!!
  }

private var _contactCard20: ImageVector? = null
