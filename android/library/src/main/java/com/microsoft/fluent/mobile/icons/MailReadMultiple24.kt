package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.MailReadMultiple24: ImageVector
  get() {
    if (_mailReadMultiple24 != null) {
      return _mailReadMultiple24!!
    }
    _mailReadMultiple24 = fluentIcon(name = "Filled.MailReadMultiple24", 24f) {
      materialPath {
          moveTo(11.36F, 1.842F)
          curveToRelative(-0.225F, -0.123F, -0.495F, -0.123F, -0.72F, 0.0F)
          lineToRelative(-7.81F, 4.26F)
          curveToRelative(-0.168F, 0.091F, -0.314F, 0.21F, -0.436F, 0.35F)
          lineTo(11.0F, 11.146F)
          lineToRelative(8.606F, -4.695F)
          curveToRelative(-0.122F, -0.139F, -0.268F, -0.257F, -0.436F, -0.349F)
          lineToRelative(-7.81F, -4.26F)
          close()
          moveTo(2.0F, 15.75F)
          verticalLineTo(7.945F)
          lineToRelative(8.64F, 4.713F)
          curveToRelative(0.225F, 0.123F, 0.495F, 0.123F, 0.72F, 0.0F)
          lineTo(20.0F, 7.945F)
          verticalLineToRelative(7.805F)
          curveToRelative(0.0F, 1.795F, -1.455F, 3.25F, -3.25F, 3.25F)
          horizontalLineTo(5.25F)
          curveTo(3.455F, 19.0F, 2.0F, 17.545F, 2.0F, 15.75F)
          close()
          moveToRelative(19.001F, -8.239F)
          curveToRelative(0.902F, 0.578F, 1.5F, 1.589F, 1.5F, 2.739F)
          verticalLineToRelative(6.0F)
          curveToRelative(0.0F, 2.9F, -2.351F, 5.25F, -5.25F, 5.25F)
          horizontalLineToRelative(-9.0F)
          curveToRelative(-1.15F, 0.0F, -2.162F, -0.598F, -2.74F, -1.5F)
          horizontalLineToRelative(11.74F)
          curveToRelative(2.07F, 0.0F, 3.75F, -1.679F, 3.75F, -3.75F)
          verticalLineTo(7.511F)
          close()        
      }
    }
    return _mailReadMultiple24!!
  }

private var _mailReadMultiple24: ImageVector? = null
