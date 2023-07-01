package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ContactCard16: ImageVector
  get() {
    if (_contactCard16 != null) {
      return _contactCard16!!
    }
    _contactCard16 = fluentIcon(name = "Filled.ContactCard16", 16f) {
      materialPath {
          moveTo(1.0F, 4.75F)
          curveTo(1.0F, 3.784F, 1.784F, 3.0F, 2.75F, 3.0F)
          horizontalLineToRelative(10.5F)
          curveTo(14.216F, 3.0F, 15.0F, 3.784F, 15.0F, 4.75F)
          verticalLineToRelative(6.5F)
          curveToRelative(0.0F, 0.966F, -0.784F, 1.75F, -1.75F, 1.75F)
          horizontalLineTo(2.75F)
          curveTo(1.784F, 13.0F, 1.0F, 12.216F, 1.0F, 11.25F)
          verticalLineToRelative(-6.5F)
          close()
          moveToRelative(4.261F, 2.964F)
          curveToRelative(0.75F, 0.0F, 1.357F, -0.608F, 1.357F, -1.357F)
          curveTo(6.618F, 5.607F, 6.011F, 5.0F, 5.261F, 5.0F)
          curveTo(4.512F, 5.0F, 3.905F, 5.607F, 3.905F, 6.357F)
          reflectiveCurveTo(4.512F, 7.714F, 5.26F, 7.714F)
          close()
          moveTo(3.858F, 8.392F)
          curveTo(3.384F, 8.392F, 3.0F, 8.776F, 3.0F, 9.25F)
          curveToRelative(0.0F, 0.767F, 0.522F, 1.435F, 1.265F, 1.62F)
          lineToRelative(0.053F, 0.014F)
          curveToRelative(0.62F, 0.155F, 1.267F, 0.155F, 1.886F, 0.0F)
          lineToRelative(0.054F, -0.013F)
          curveTo(7.0F, 10.685F, 7.523F, 10.017F, 7.523F, 9.25F)
          curveToRelative(0.0F, -0.475F, -0.385F, -0.859F, -0.858F, -0.859F)
          horizontalLineTo(3.858F)
          close()
          moveTo(9.5F, 6.0F)
          curveTo(9.224F, 6.0F, 9.0F, 6.224F, 9.0F, 6.5F)
          reflectiveCurveTo(9.224F, 7.0F, 9.5F, 7.0F)
          horizontalLineToRelative(3.0F)
          curveTo(12.776F, 7.0F, 13.0F, 6.776F, 13.0F, 6.5F)
          reflectiveCurveTo(12.776F, 6.0F, 12.5F, 6.0F)
          horizontalLineToRelative(-3.0F)
          close()
          moveToRelative(0.0F, 3.0F)
          curveTo(9.224F, 9.0F, 9.0F, 9.224F, 9.0F, 9.5F)
          reflectiveCurveTo(9.224F, 10.0F, 9.5F, 10.0F)
          horizontalLineToRelative(3.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, -0.224F, 0.5F, -0.5F)
          reflectiveCurveTo(12.776F, 9.0F, 12.5F, 9.0F)
          horizontalLineToRelative(-3.0F)
          close()        
      }
    }
    return _contactCard16!!
  }

private var _contactCard16: ImageVector? = null
